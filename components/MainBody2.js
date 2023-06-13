import Image from "next/image";
import GeneralPosts from "./GeneralPosts";
import Link from "next/link";

const MainBody2 = () => {
  return (
    <div className="static z-10">
      <div className="px-[15%] ">
        <div className=" mdd:mainbody2 space-x-10 justify-center relative mdd:flex mdd:py-20 mdd:border-b mdd:border-neutral-300 mdd:flex-row flex flex-col-reverse">
          <div>
            <Link href="/readpost">
              <GeneralPosts />
            </Link>
          </div>
          <div className="mdd:sticky static z-10 top-0 h-[100%] mdd:w-auto w-[100%]">
            <div>
              <h1 className="font-medium py-3">
                Discover more of what matters to you
              </h1>
            </div>
            <div>
              <div className="border-neutral-300 border-b">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs py-2 px-4 cursor-pointer hover:bg-neutral-300 hover:ease-in-out duration-500 bg-neutral-100 text-black rounded-full">
                    Programming
                  </span>
                  <span className="text-xs py-2 px-4 cursor-pointer hover:bg-neutral-300 hover:ease-in-out duration-500 bg-neutral-100 text-black rounded-full">
                    Technology
                  </span>
                  <span className="text-xs py-2 px-4 cursor-pointer hover:bg-neutral-300 hover:ease-in-out duration-500 bg-neutral-100 text-black rounded-full">
                    Creativity
                  </span>
                  <span className="text-xs py-2 px-4 cursor-pointer hover:bg-neutral-300 hover:ease-in-out duration-500 bg-neutral-100 text-black rounded-full">
                    Productivity
                  </span>
                  <span className="text-xs py-2 px-4 cursor-pointer hover:bg-neutral-300 hover:ease-in-out duration-500 bg-neutral-100 text-black rounded-full">
                    Self-Improvement
                  </span>
                  <span className="text-xs py-2 px-4 cursor-pointer hover:bg-neutral-300 hover:ease-in-out duration-500 bg-neutral-100 text-black rounded-full">
                    Artificial Intelligence
                  </span>
                </div>
                <div className="py-4">
                  <span className="text-xs text-green-700 cursor-pointer">
                    See more topics
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 invisible mdd:visible">
                <span className="text-xs text-neutral-400">About</span>
                <span className="text-xs text-neutral-400">Terms</span>
                <span className="text-xs text-neutral-400">Privacy</span>
                <span className="text-xs text-neutral-400">Blogs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody2;
