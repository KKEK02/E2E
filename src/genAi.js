// import the Genkit and Google AI plugin libraries
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import mammoth from 'mammoth';

// import { PDFDocument } from "pdf-lib";

const genAI = new GoogleGenerativeAI(
  "AIzaSyA4wJo4zK8IIhL2G3qLE4LXJ0VvXzFWGvg"
);






export const extractMetadata = async (file) => {
  if (!file) {
    console.error("No file provided for metadata extraction.");
    return { description: "", tags: [] };
  }

    // const files = [
    //   await uploadToGemini(file.path, "application/pdf"),
    // ];


    // await waitForFilesActive(files);
    // console.log("Extracting text from file...");
    // const fileContents = await extractText(file);
    // console.log(fileContents);

    const prompt =  `Analyze the content of the "${file.name}" with contents   and provide:
    1. A concise two-line description summarizing the file's content.
    2. A list of relevant tags (keywords) that describe the file.

    Return the output in the following format:
    Description: <two-liner>
    Tags: <comma-separated list of tags>`;



   
  try {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });
    const result = (await model.generateContent(prompt));
    console.log(result+"result");
    const response = result.response;
    const text =   response.text();  
    
    // const result = await model.generateContent(prompt);
    console.log(text);
    const [description, tagsLine] = text.split("\n").map((line) => line.trim());
    const tags = tagsLine.replace("Tags:", "").split(",").map((tag) => tag.trim());
    return { description, tags };
  } catch (error) {
    console.error("Error extracting metadata:", error);
    return { description: "", tags: [] };
  }
};