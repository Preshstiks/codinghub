import { useMutation, useQuery } from "@tanstack/react-query";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import { useSelector } from "react-redux";

// console.log(id);

// export const createBlog = () => {
//   return useMutation(createNewBlog);
// };
// const fetchBlogs = async () => {
//   const docRef = collection(db, "generalBlogs");
//   const getData = await getDocs(docRef);
//   const docs = [];
//   getData.forEach((doc) => {
//     docs.push({ id: doc.id, ...doc.data() });
//   });
//   return docs;
// };
// export const generalPostData = () => {
//   return useQuery(["generalPost"], fetchBlogs);
// };
