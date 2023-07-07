import { db } from "@/services/firebase";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";
const UserPosts = () => {
  const { id } = useSelector((state) => state.auth.user);
  // const [allblogs, setAllBlogs] = useState([])
  // const [userBlogList, setUserBlogList] = useState([])
  const [displayBlog, setDisplayBlog] = useState([]);
  // const [loading, setLoading] = useState(true)

  const fetchAllData = async () => {
    const dataRef = collection(db, "generalBlogs");
    const getFiles = await getDocs(dataRef);
    const docs = [];
    getFiles.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    console.log(getFiles);
    return docs;
  };

  const getUserData = async () => {
    const userRef = doc(db, "users", id);
    try {
      const docSnap = await getDoc(userRef);
      const userDetails = docSnap.data();
      // console.log(userDetails);
      return userDetails.userBlogs;
    } catch (error) {
      console.log(error);
    }
  };
  const { data: allBlogs } = useQuery(["fetchGeneralBlogs"], fetchAllData);
  const { data: userDetails } = useQuery(["fetchUserDetails"], getUserData);
  const getUsersBlog = () => {
    const blogList = {};
    allBlogs?.map((blog) => (blogList[blog.id] = blog));
    const userBlog = userDetails?.map((blog) => blogList[blog]);
    console.log({ blogList });
    console.log(userBlog);
    return userBlog;
  };
  useEffect(() => {
    const userBlog = getUsersBlog();
    setDisplayBlog(userBlog);
    console.log({ allBlogs, userDetails });
  }, [allBlogs, userDetails]);

  const handleDelete = ({ blogId }) => {
    const userRef = doc(db, "users", id);
    const blogRef = doc(db, "generalBlogs", blogId);
    const newData = displayBlog.filter((blog) => {
      blog.id !== blogId;
    });
    try {
      updateDoc(userRef, {
        userBlogs: newData,
      });
      deleteDoc(blogRef);
    } catch (error) {
      console.log(error);
    }
  };
  const { mutate: deleteBlog } = useMutation(handleDelete);

  return (
    <div>
      <div className="py-10">
        {displayBlog?.map((blog) => (
          <Link href={`/blog/${blog.id}`}>
            <div className="bg-neutral-100 relative p-5 border border-neutral-300 my-5">
              <div className="flex gap-2 items-center">
                <div>
                  <Image
                    className="w-5 h-5 rounded-full"
                    height={30}
                    width={30}
                    src={
                      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    }
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <span className="text-xs font-medium">
                  {blog?.authorFullName}
                </span>
              </div>
              <div className="pt-1">
                <h1 className="font-bold">{blog?.title}</h1>
                <span className="text-neutral-500 text-sm font-normal">
                  {blog?.subTitle}
                </span>
              </div>
              <div className="flex pt-3 justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xs text-neutral-500 font-light">
                    {blog?.Date}
                  </span>
                  <div className="text-xs text-neutral-500 font-light mx-1">
                    .
                  </div>
                  <span className="text-xs text-neutral-500 font-light">
                    {blog?.readTime} read
                  </span>
                  <div className="text-xs text-neutral-500 font-light mx-1">
                    .
                  </div>
                </div>
                <div className="flex gap-4 text-gray-600 justify-end items-center">
                  <span className="text-lg hover:text-black hover:text-xl cursor-pointer absolute bottom-4 right-12">
                    <FiEdit />
                  </span>
                  <span
                    onClick={() => deleteBlog({ blogId: blog?.id })}
                    className="text-xl hover:text-black hover:text-2xl cursor-pointer absolute bottom-3.5 right-4"
                  >
                    <MdDeleteOutline />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* <div className="bg-neutral-100 p-5 border border-neutral-300 my-5">
          <div className="flex gap-2 items-center">
            <div>
              <Image
                className="w-5 h-5 rounded-full"
                height={30}
                width={30}
                src={
                  "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                }
                style={{ objectFit: "cover" }}
              />
            </div>

            <span className="text-xs font-medium">Chris Newman</span>
          </div>
          <h1 className="font-bold">A Love Letter to Gen Z</h1>
          <span className="text-neutral-500 font-normal">
            From your Big Brother, an Older Millenial
          </span>
          <div className="flex items-center">
            <span className="text-xs text-neutral-500 font-light">May 19</span>
            <div className="text-xs text-neutral-500 font-light mx-1">.</div>
            <span className="text-xs text-neutral-500 font-light">
              7 mins read
            </span>
            <div className="text-xs text-neutral-500 font-light mx-1">.</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserPosts;
