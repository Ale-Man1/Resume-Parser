import './App.css';
import { useState } from "react";
import { ref, uploadBytes, getStorage, listAll, getDownloadURL } from "firebase/storage";
import { storage } from './firebase';
import axios from 'axios';
// FOR CLIENT: npm start
// FOR BACKEND: nodemon app.js
function App() {

  const[fileUpload, setFileUpload] = useState(null);
  const storagelist = getStorage();
  const [data, setData] = useState([]);
  var link = "";
  const listRef = ref(storagelist, 'files/resumes');

  const uploadFile = () => {
    if(fileUpload == null) {
      alert("Nothing was Uploaded")
      return;
    }
    link = ref(storage, `resumes/${fileUpload.name}`);
    console.log(link);
    const fileRef = ref(storage, `resumes/${fileUpload.name}`);
    uploadBytes(fileRef, fileUpload).then(() => {
      axios.post(`http://localhost:3001`, {
        fileName: "fileUpload.name"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      alert("File Uploaded")
    })
  }



  const listAllResumes = () => {
    listAll("resumes/");
  }
  

  return (
    <div className="App">
      <br></br><br></br><br></br>
      <h1>React/NodeJS</h1>
      <h1>Resume Parser</h1>
      <h2>Enter your resume into our database that recruiters use!</h2>
      <h3>Please enter your resume below! (No images please)</h3>
      <input
        type="file"
        id="fileInput"
        onChange={(event) => {
          const file = document.getElementById('fileInput');
          const fileList = event.target.files;
          console.log(fileList);
          console.log(file);
          setFileUpload(event.target.files[0]);
      }}></input>
      <button for="fileInput" onClick={uploadFile}>Upload Resume</button>

      {/* this works as a comment
      <h3>Checking if Backend gets anything <button>Press to check</button></h3>
      */}
      <br></br><br></br><br></br>
      
        
    </div>
  );
}

export default App;
