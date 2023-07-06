import Image from "next/image";
import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import Comments from "../../../components/Comments";
import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

const ReadBlog = () => {
  const [likeBtn, setLikeBtn] = useState(false);
  const [count, setCount] = useState(0);
  const [sideBar, setSideBar] = useState(false);
  const [comments, setComments] = useState("");
  const { full_Name } = useSelector((state) => state.auth.user);
  const handleShowSideBar = () => {
    setSideBar(true);
  };

  const handleHideSideBar = () => {
    setSideBar(false);
  };
  // const commentBox = useRef(null);
  const router = useRouter();
  const { id } = router.query;
  const fetchBlogs = async (id) => {
    const docRef = doc(db, "generalBlogs", id);
    try {
      const docSnap = await getDoc(docRef);
      const blogDetails = docSnap.data();
      setCount(blogDetails.likes || 0);
      return blogDetails;
    } catch (error) {
      console.log(error);
    }
  };
  const handleLikeClick = async () => {
    const likeRef = doc(db, "generalBlogs", id);
    try {
      if (likeBtn) {
        await updateDoc(likeRef, {
          likes: increment(-1),
        });
        setCount((prevCount) => prevCount - 1);
      } else {
        await updateDoc(likeRef, {
          likes: increment(1),
        });
        setCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.log(error);
    }
    // setCount(newCount);
    // updateLikes(newCount);
    setLikeBtn(!likeBtn);
  };

  const addComments = async () => {
    const docRef = doc(db, "generalBlogs", id);
    const newCommentId = uuid();
    const commentData = {
      userName: full_Name,
      userCommentId: newCommentId,
      usersComment: comments,
    };
    try {
      setDoc(docRef, {
        commentData,
      });
    } catch (error) {}
  };

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery(["fetchBlogsDetails", id], () => fetchBlogs(id), {
    enabled: !!id,
  });
  return (
    <div>
      {blog && (
        <div className="flex" key={blog?.id}>
          <div className={sideBar ? "bg-gray-100" : "bg-none"}>
            <div className="flex justify-center font-instrumental">
              <div className="w-[50%] pt-20">
                <h1 className="title text-4xl text-slate-800">
                  {blog?.title}
                  {/* Using Firebase and Firestore in a Next.js Application: A
              Step-by-Step Tutorial */}
                </h1>
                <div className="flex items-center space-x-5 py-10 border-b border-gray-200">
                  <Image
                    className="h-12 w-12 rounded-full"
                    width={700}
                    height={700}
                    src={
                      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    }
                    style={{ objectFit: "cover" }}
                  />
                  <div>
                    <span>{blog?.authorFullName}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">{blog?.readTime} read</span>
                      <div>.</div>
                      <span className="text-sm">{blog?.Date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-12 relative py-3 border-b border-gray-200">
                  <span onClick={handleLikeClick}>
                    {likeBtn ? (
                      <BsHandThumbsUpFill className="text-black text-2xl" />
                    ) : (
                      <BsHandThumbsUp className="text-gray-500 text-2xl hover:text-black" />
                    )}
                    <div className="absolute top-4 text-gray-500 left-7 text-sm">
                      {count}
                    </div>
                  </span>
                  <div className="relative">
                    <GoComment
                      onClick={handleShowSideBar}
                      className="text-gray-500 text-2xl hover:text-black"
                    />
                    <div className="absolute top-1 text-gray-500 ml-[30px] text-sm">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-10">
              <Image
                className="w-[50%]"
                width={700}
                height={700}
                src={
                  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                }
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex justify-center">
              <p className="w-[50%] text-xl tracking-wide py-10 leading-9 text-[#333]">
                {blog?.body}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-[50%]">
                <div className="flex items-center space-x-12 relative py-3">
                  <span onClick={handleLikeClick}>
                    {likeBtn ? (
                      <BsHandThumbsUpFill className="text-black text-2xl" />
                    ) : (
                      <BsHandThumbsUp className="text-gray-500 text-2xl hover:text-black" />
                    )}
                    <div className="absolute top-4 text-gray-500 left-7 text-sm">
                      {count}
                    </div>
                  </span>
                  <div className="relative">
                    <GoComment className="text-gray-500 text-2xl hover:text-black" />
                    <div className="absolute top-1 text-gray-500 ml-[30px] text-sm">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 mt-10 font-instrumental">
              <div className="flex justify-center">
                <div className="w-[50%] border-b border-200 py-10">
                  <Image
                    className="h-12 w-12 rounded-full"
                    width={700}
                    height={700}
                    src={
                      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    }
                    style={{ objectFit: "cover" }}
                  />
                  <h1 className="pt-5 text-slate-800 text-xl footer-name">
                    Written by {blog?.authorFullName}
                  </h1>
                </div>
              </div>
              <div className="flex item-center text-neutral-400 space-x-20 text-xs justify-center py-5">
                <span>About</span>
                <span>terms</span>
                <span>Privacy</span>
                <span>Blogs</span>
              </div>
            </div>
          </div>
          {/* Side Bar */}
          <AnimatePresence>
            {sideBar && (
              <motion.div
                initial={{ opacity: 0, x: 100, top: 0 }}
                animate={{ opacity: 1, x: 0, top: 0 }}
                exit={{ opacity: 0, x: 100, top: 0 }}
                transition={{ ease: "easeInOut" }}
                className="bg-white fixed h-screen overflow-y-auto max-w-[30%] shadow-2xl top-0 right-0 px-4"
              >
                <div className="pb-[80px] border-b border-gray-300">
                  <div className="flex justify-between items-center px-4 py-6">
                    <div className="flex text-xl items-center space-x-2">
                      <h1>Comments</h1>
                      <span>(0)</span>
                    </div>
                    <MdOutlineCancel
                      onClick={handleHideSideBar}
                      className="text-gray-400 text-2xl"
                    />
                  </div>
                  <div className="shadow-xl mx-4 rounded-md">
                    <div className="flex items-center space-x-3 px-4 py-3 mt-4">
                      <Image
                        className="h-9 w-9 rounded-full"
                        width={700}
                        height={700}
                        src={
                          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        }
                        style={{ objectFit: "cover" }}
                      />
                      <h1 className="text-sm">{full_Name}</h1>
                    </div>
                    <div className="p-3">
                      <textarea
                        className="text-sm h-auto resize-none w-[300px] py-4 px-4 !outline-none"
                        placeholder="what are your thoughts?"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                      ></textarea>
                      <div
                        onClick={handleSubmit}
                        className="flex justify-end py-1"
                      >
                        <button className="py-1 px-4 text-sm bg-green-700 hover:bg-green-800 text-white rounded-full">
                          Respond
                        </button>
                      </div>
                    </div>
                    {/* <div
            contentEditable
            placeholder="what are your thoughts?"
            className="h-auto w-[300px] py-4 px-4 !outline-none"></div> */}
                  </div>
                </div>
                {/* Comment section */}
                <div className="px-7 pt-7 pb-[60px] mx-5 mb-5 mt-10 border-b border-gray-300">
                  <div>
                    <div className="flex pb-3 items-center space-x-4">
                      <Image
                        className="h-9 w-9 rounded-full"
                        width={700}
                        height={700}
                        src={
                          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        }
                        style={{ objectFit: "cover" }}
                      />
                      <div className="flex flex-col text-sm">
                        <span>Davies Precious</span>
                        <span className="text-gray-400">
                          about 21 hours ago
                        </span>
                      </div>
                    </div>
                    <p className="max-w-[300px] text-sm leading-6">
                      I am so guilty of this one in personal projects! Hack hack
                      hack! Done! It is working fine now, so I am sure it will
                      be fine in the future”.
                    </p>
                  </div>
                </div>
                {/* End Comment */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ReadBlog;
