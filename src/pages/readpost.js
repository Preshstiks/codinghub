import Image from "next/image";
import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import Comments from "../../components/Comments";
import { doc } from "firebase/firestore";
import { db } from "@/services/firebase";
import { useRouter } from "next/router";
const ReadPost = () => {
  const [likeBtn, setLikeBtn] = useState(true);
  const [sideBar, setSideBar] = useState(false);

  const handleShowSideBar = () => {
    setSideBar(true);
  };

  const handleHideSideBar = () => {
    setSideBar(false);
  };
  // const commentBox = useRef(null);

  const handleLike = () => {
    setLikeBtn(!likeBtn);
  };
  const router = useRouter();
  const { id } = router.query;
  const fetchBlogs = async () => {
    const docRef = doc(db, "generalBlogs", id);
  };
  return (
    <div className="flex">
      <div className={sideBar ? "bg-gray-100" : "bg-none"}>
        <div className="flex justify-center font-instrumental">
          <div className="w-[50%] pt-20">
            <h1 className="title text-4xl text-slate-800">
              Using Firebase and Firestore in a Next.js Application: A
              Step-by-Step Tutorial
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
                <span>Chris Newman</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm">3 mins read</span>
                  <div>.</div>
                  <span className="text-sm">Apr 8</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-12 relative py-3 border-b border-gray-200">
              <span onClick={handleLike}>
                {likeBtn ? (
                  <BsHandThumbsUp className="text-gray-500 text-2xl hover:text-black" />
                ) : (
                  <BsHandThumbsUpFill className="text-black text-2xl" />
                )}
                <div className="absolute top-4 text-gray-500 left-7 text-sm">
                  1
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
            Lorem ipsum dolor sit amet. Ad corrupti quae qui voluptatem
            repellendus qui iste quaerat ut consequuntur quisquam sed iure
            quidem et magnam tempore. Aut nihil explicabo aut ipsam error cum
            dignissimos libero et distinctio quod vel odio saepe non quidem
            dolore. Ut porro dolorum id laborum consequatur aut magnam libero
            non necessitatibus quod. Qui nihil aspernatur in ducimus beatae 33
            autem recusandae. Sit ratione odit eos fuga amet ut velit ullam qui
            asperiores omnis sit repellat doloremque. Ut dignissimos
            exercitationem non odit sint eum assumenda natus et omnis
            necessitatibus et dolores nihil id laboriosam velit cum dolor
            dignissimos! Lorem ipsum dolor sit amet. Nam vero eveniet sit
            tempore molestiae ut fugiat repellat. Sit laudantium debitis sit
            voluptate fugit aut voluptas odit in sequi dolor! Eum molestias
            repudiandae cum quia error sit neque recusandae et quis galisum ut
            esse unde ea earum nesciunt. Aut voluptatem expedita ex quam dolorem
            vel quia beatae et autem alias eum dolor sint qui obcaecati aliquam.
            Aut sapiente neque vel fugiat sint id porro repudiandae 33 vero iste
            aut facere doloremque sit repellat atque! Est quis amet et atque
            sint aut consectetur necessitatibus id fugit obcaecati rem corporis
            illum ut impedit quis. Sed officiis tenetur aut pariatur distinctio
            et officiis galisum est dolores earum in soluta consequatur. Qui
            atque quia qui esse excepturi est rerum dolores et animi earum et
            molestias voluptatum et omnis dolor nam dolor nihil. Ut blanditiis
            rerum qui dolores voluptatum qui voluptatem voluptatem.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-[50%]">
            <div className="flex items-center space-x-12 relative py-3">
              <span onClick={handleLike}>
                {likeBtn ? (
                  <BsHandThumbsUp className="text-gray-500 text-2xl hover:text-black" />
                ) : (
                  <BsHandThumbsUpFill className="text-black text-2xl" />
                )}
                <div className="absolute top-4 text-gray-500 left-7 text-sm">
                  1
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
                Written by Chris Newman
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
                  <h1>Responses</h1>
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
                  <h1 className="text-sm">Chris Newman</h1>
                </div>
                <div className="p-3">
                  <textarea
                    className="text-sm h-auto resize-none w-[300px] py-4 px-4 !outline-none"
                    placeholder="what are your thoughts?"
                  ></textarea>
                  <div className="flex justify-end py-1">
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
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReadPost;
