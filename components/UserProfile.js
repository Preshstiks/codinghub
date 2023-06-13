import Image from "next/image";
import { useState } from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { full_Name } = useSelector((state) => state.auth.user);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const cancelEdit = () => {
    setIsEdit(false);
  };

  if (isEdit) {
    return <EditProfile cancelEdit={cancelEdit} />;
  }
  return (
    <div className="flex justify-start font-instrumental">
      <div className="py-10 mt-5">
        <div>
          <Image
            className="w-20 h-20 rounded-full"
            width={600}
            height={600}
            style={{ objectFit: "cover" }}
            src={
              "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            }
          />
        </div>
        <div className="mt-4">
          <h1 className="text-sm font-medium">{full_Name}</h1>
        </div>
        <div className="pt-1">
          <h1 className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet. In laborum laboriosam ex consequatur
            enim sed consequatur explicabo est velit doloremque et inventore
            harum nam natus cumque. Non fugit temporibus hic totam repellat quo
            enim magnam ut alias quae qui eaque ducimus. Aut fugit aspernatur et
            quasi dicta est repudiandae commodi et neque velit aut voluptatem
            nisi.
          </h1>
        </div>
        <div className="pt-10">
          <span
            onClick={handleEdit}
            className="text-sm cursor-pointer text-green-700">
            Edit Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
