import Image from "next/image";
import { useState } from "react";
import UserProfile from "../../components/UserProfile";
import UserPosts from "../../components/UserPosts";
import { useSelector } from "react-redux";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { full_Name } = useSelector((state) => state.auth.user);
  const tabClick = (tabPage) => {
    setActiveTab(tabPage);
  };
  return (
    <div className="font-instrumental  flex justify-center">
      <div className="pt-10 w-[30%]">
        <h1 className="text-4xl font-medium pb-10">{full_Name}</h1>
        <div className="pb-3 border-b border-neutral-400 space-x-5">
          <span
            onClick={() => tabClick("profile")}
            className={
              activeTab === "profile"
                ? "text-black font-medium border-b-2 rounded-sm border-black pb-3 text-sm cursor-pointer"
                : "text-gray-500 text-sm hover:text-black cursor-pointer"
            }>
            Profile
          </span>
          <span
            onClick={() => tabClick("posts")}
            className={
              activeTab === "posts"
                ? "text-black font-medium border-b-2 rounded-sm border-black pb-3 text-sm cursor-pointer"
                : "text-gray-500 text-sm hover:text-black cursor-pointer"
            }>
            Posts
          </span>
        </div>
        <div>
          {activeTab === "profile" && <UserProfile />}
          {activeTab === "posts" && <UserPosts />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
