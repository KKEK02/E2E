import { useState } from "react";
import { gapi } from "gapi-script";
import { accessToken } from "./Firebase";

const DriveFiles = ({logout}) => {
  const [files, setFiles] = useState([]);

  const listFiles = async () => {
    try {
    const response = await gapi.client.drive.files.list({
        pageSize: 10,
        fields: "files(id, name, mimeType, webViewLink, webContentLink)",
        q: "(mimeType='application/pdf' or mimeType='application/vnd.google-apps.document' or mimeType='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')"
    });
      setFiles(response.result.files);
    } catch (error) {
      console.error("Error fetching Drive files:", error);
    }
  };

  return (
    <div>
      <button onClick={listFiles}>Fetch Drive Files</button>
      <button onClick={logout}>logout</button>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} ({file.mimeType}){file.webcontentlink} <button onClick={() => shareFile(file.id, "komalkonatham@gmail.com")}>Share</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


async function shareFile(fileId, email) {
     // Fetch the OAuth token
  
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          role: "reader", // Can be "reader", "writer", or "owner"
          type: "user",
          emailAddress: email, // The user's email to share with
        }),
      }
    );
  
    const data = await response.json();
    console.log("File shared:", data);
}

  
export default DriveFiles;