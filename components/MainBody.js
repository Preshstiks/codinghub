import Image from "next/image";
import { useSelector } from "react-redux";

const MainBody = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
  return (
    <div className="mainbody border-b border-neutral-300 pb-12">
      <div className="flex gap-4 pt-12 pb-5 pl-[15%]">
        <Image src="/trend-icon.png" width={25} height={20} />
        <h1 className="font-medium">Trending on CodingHub</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[70%]">
          <div className="flex justify-start flex-wrap gap-5 mainbody-flex">
            <div className="flex gap-6">
              <div>
                <span className="text-4xl font-semibold text-neutral-300">
                  01
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">
                  Lee Sung Min in Level Up coding.
                </span>
                <h1 className="font-bold text-sm pt-2 pb-1">
                  Training your own LLM using private GPT.
                </h1>
                <div>
                  <span className="text-xs text-neutral-500 font-light">
                    May 19 .
                  </span>
                  <span className="text-xs text-neutral-500 font-light">
                    {" "}
                    7 mins read
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <span className="text-4xl font-semibold text-neutral-300">
                  02
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">
                  Hwang Min Ji in Level Up coding.
                </span>
                <h1 className="font-bold text-sm pt-2 pb-1">
                  Training your own LLM using private GPT.
                </h1>
                <div>
                  <span className="text-xs text-neutral-500 font-light">
                    May 19 .
                  </span>
                  <span className="text-xs text-neutral-500 font-light">
                    {" "}
                    7 mins read
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <span className="text-4xl font-semibold text-neutral-300">
                  03
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">
                  Yu Chung Pyu in Level Up coding.
                </span>
                <h1 className="font-bold text-sm pt-2 pb-1">
                  Training your own LLM using private GPT.
                </h1>
                <div>
                  <span className="text-xs text-neutral-500 font-light">
                    May 19 .
                  </span>
                  <span className="text-xs text-neutral-500 font-light">
                    {" "}
                    7 mins read
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <span className="text-4xl font-semibold text-neutral-300">
                  04
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">
                  Kim Hyung Jun in Level Up coding.
                </span>
                <h1 className="font-bold text-sm pt-2 pb-1">
                  Training your own LLM using private GPT.
                </h1>
                <div>
                  <span className="text-xs text-neutral-500 font-light">
                    May 19 .
                  </span>
                  <span className="text-xs text-neutral-500 font-light">
                    {" "}
                    7 mins read
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <span className="text-4xl font-semibold text-neutral-300">
                  05
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">
                  Jim Su Yeon in Level Up coding.
                </span>
                <h1 className="font-bold text-sm pt-2 pb-1">
                  Training your own LLM using private GPT.
                </h1>
                <div>
                  <span className="text-xs text-neutral-500 font-light">
                    May 19 .
                  </span>
                  <span className="text-xs text-neutral-500 font-light">
                    {" "}
                    7 mins read
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <span className="text-4xl font-semibold text-neutral-300">
                  06
                </span>
              </div>
              <div>
                <span className="text-xs font-medium">
                  Han Ji Sung in Level Up coding.
                </span>
                <h1 className="font-bold text-sm pt-2 pb-1">
                  Training your own LLM using private GPT.
                </h1>
                <div>
                  <span className="text-xs text-neutral-500 font-light">
                    May 19 .
                  </span>
                  <span className="text-xs text-neutral-500 font-light">
                    {" "}
                    7 mins read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
