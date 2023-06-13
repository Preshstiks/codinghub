import { useState } from "react";
import { storage } from "../services/firebase";
import { IoIosAddCircleOutline } from "react-icons/io";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// const UploadForm = () => {
//   const [image, setImage] = useState(null);
//   const [progress, setProgress] = useState(0);

//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (image) {
//       try {
//         const uploadTask = storage.ref(`images/${image.name}`).put(image);

//         uploadTask.on(
//           "state_changed",
//           (snapshot) => {
//             const progress = Math.round(
//               (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             );
//             setProgress(progress);
//           },
//           (error) => {
//             console.log(error);
//           },
//           async () => {
//             try {
//               const url = await storage
//                 .ref("images")
//                 .child(image.name)
//                 .getDownloadURL();

//               const imageDoc = {
//                 url: url,
//                 createdAt: serverTimestamp(),
//               };

//               // Save the image URL to Firestore
//               const docRef = await addDoc(collection(db, "images"), imageDoc);
//               console.log("Image added with ID: ", docRef.id);
//             } catch (error) {
//               console.log(error);
//             }
//           }
//         );
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <progress value={progress} max="100" />
//     </div>
//   );
// };

// export default UploadForm;
