import { useState, useEffect } from "react";
import axios from "axios";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:8000/files/list/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFiles(response.data);
    };
    fetchFiles();
  }, []);

  return (
    <div>
      <h2>Your Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} - <a href={file.download_url}>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
