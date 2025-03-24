const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const vision = require("@google-cloud/vision");
const pdfParse = require("pdf-parse");

admin.initializeApp();
const storage = new Storage();
const client = new vision.ImageAnnotatorClient();

exports.extractTextFromFile = functions.https.onCall(async (data, context) => {
    const { filePath } = data; // Ensure filePath is received from the frontend
    if (!filePath) {
        throw new functions.https.HttpsError("invalid-argument", "A file path must be specified.");
    }

    const bucketName = "cc-041405.appspot.com";

    try {
        // Get file metadata
        const [metadata] = await storage.bucket(bucketName).file(filePath).getMetadata();
        const contentType = metadata.contentType;

        // 🔹 Handling Images with Google Vision API
        if (contentType.startsWith("image/")) {
            const [file] = await storage.bucket(bucketName).file(filePath).download();
            const [result] = await client.textDetection(file);
            const detections = result.textAnnotations;
            return { text: detections.length ? detections[0].description : "No text found" };
        }

        // 🔹 Handling PDFs with `pdf-parse`
        if (contentType === "application/pdf") {
            const [fileBuffer] = await storage.bucket(bucketName).file(filePath).download();
            const pdfData = await pdfParse(fileBuffer);
            return { text: pdfData.text };
        }

        throw new functions.https.HttpsError("invalid-argument", "Unsupported file type");

    } catch (error) {
        console.error("Error extracting text:", error);
        throw new functions.https.HttpsError("internal", `Unable to extract text: ${error.message}`);
    }
});
