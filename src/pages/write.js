import { useState } from "react";
import { db, storage } from "../services/firebase";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useSelector } from "react-redux";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { blogArray, createBlog } from "@/hooks/generalPostData";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import LoggedInNavbar from "../../components/LoggedInNavbar";
import { useRouter } from "next/router";
const Write = () => {
  const [showAddImgBtn, setShowAddImgBtn] = useState(false);
  const [storeImg, setStoreImg] = useState(null);
  const [storeImgUrl, setStoreImgUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const { full_Name } = useSelector((state) => state.auth.user);
  const { id: userId } = useSelector((state) => state.auth.user);
  const router = useRouter();
  const showImgBtn = (e) => {
    e.preventDefault();
    setShowAddImgBtn(true);
  };
  const hideImgBtn = (e) => {
    e.preventDefault();
    setShowAddImgBtn(false);
  };
  // const handleImgUploaded = (e) => {
  //   setStoreImg(e.target.files[0]);
  //   if (storeImg) {
  //     setStoreImgUrl(URL.createObjectURL(storeImg));
  //   }
  // };
  // const handleSelectImg = () => {
  //   document.getElementById("file-update").click();
  // };
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const monthNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const monthName = monthNames[month];
  const hours = new Date().getHours();
  let period;
  let convertedHrs;
  const minute = new Date().getMinutes();
  if (hours === 0) {
    convertedHrs = 12;
    period = "AM";
  } else if (hours < 12) {
    convertedHrs = hours;
    period = "AM";
  } else if (hours === 12) {
    convertedHrs = 12;
    period = "PM";
  } else {
    convertedHrs = hours - 12;
    period = "PM";
  }
  const time = convertedHrs + ":" + minute + period;
  const date = monthName + " " + day;
  const getRandomNumber = (min, max) => {
    // Calculate the range
    const range = max - min + 1;

    // Generate a random number within the range and shift it to the desired range
    const randomNumber = Math.floor(Math.random() * range) + min;

    return randomNumber;
  };

  const createNewBlog = ({ newBlog }) => {
    const blogRef = doc(db, "generalBlogs", newBlog.id);
    const readTime = getRandomNumber(3, 10);
    try {
      setDoc(blogRef, {
        ...newBlog,
        authorId: userId,
        postedAt: time,
        Date: date,
        readTime: readTime + " mins",
        likes: 0,
        comments: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const { mutate } = useMutation(createNewBlog);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPostId = uuid();
    const newBlog = {
      title: title,
      subTitle: subtitle,
      authorFullName: full_Name,
      body: content,
      id: newPostId,
      comments: [],
    };
    mutate({ newBlog });
    const updateNewPost = {
      userBlogs: arrayUnion(newPostId),
    };
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      ...updateNewPost,
    });
    router.push("/");
  };
  return (
    <div className="flex justify-center p-10">
      {/* {storeImgUrl && storeImg && (
        <Image src={storeImgUrl} alt={storeImg.name} height={700} width={700} />
      )} */}
      <form id="my-blogForm" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="file"
            id="file-update"
            accept="image/*"
            className="hidden absolute"
            // onChange={handleImgUploaded}
          />
          <div className="mt-2 relative space-x-10">
            {showAddImgBtn && (
              <motion.div
                initial={{ opacity: 0, x: 100, top: 0 }}
                animate={{ opacity: 1, x: 0, top: 0 }}
                exit={{ opacity: 0, x: 100, top: 0 }}
              >
                <button className="absolute top-0">
                  <BsCardImage className="text-gray-500 text-2xl" />
                </button>
              </motion.div>
            )}
            <button onClick={showAddImgBtn ? hideImgBtn : showImgBtn}>
              {showAddImgBtn ? (
                <MdOutlineCancel className="text-gray-500 text-2xl" />
              ) : (
                <IoIosAddCircleOutline className="text-gray-500 text-2xl" />
              )}
            </button>
          </div>
          <div>
            <div>
              <textarea
                className="text-4xl resize-none !outline-none focus:border-l-2 text-black focus:border-neutral-400"
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="text-4xl resize-none !outline-none focus:border-l-2 text-black focus:border-neutral-400"
                type="text"
                placeholder="Sub Title"
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="text-4xl resize-none !outline-none focus:border-l-2 text-black focus:border-neutral-400"
                type="text"
                placeholder="Tell your story"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Write;
