import Image from "next/image";
import { motion } from "framer-motion";

const EditProfile = ({ cancelEdit }) => {
  return (
    <motion.div initial={{ y: 10 }} animate={{ y: 0 }} exit={{ y: -30 }}>
      <div className="flex justify-start font-instrumental">
        <div className="py-10 mt-5">
          <div className="flex space-x-5 items-center">
            <Image
              className="w-20 h-20 rounded-full"
              width={600}
              height={600}
              style={{ objectFit: "cover" }}
              src={
                "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              }
            />
            <div className="space-y-3">
              <div className="flex space-x-3">
                <span className="text-sm text-green-700 cursor-pointer">
                  Update Image
                </span>
                <span className="text-sm text-red-600 cursor-pointer">
                  Remove
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                side.
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1">
            <label for="name" className="text-sm py-4">
              Name
            </label>
            <input
              className="text-sm font-medium !outline-none border-b border-black"
              type="text"
            />
          </div>
          <div>
            <div className="py-4">
              <label className="text-sm">Bio</label>
            </div>

            <textarea
              className="text-sm h-auto w-[400px] text-black resize-none !outline-none border-b border-black"
              type="text"
            />
          </div>
          <div className="pt-10 flex space-x-4 justify-end">
            <button
              onClick={cancelEdit}
              className="py-2 px-6 border text-sm border-green-700 text-green-700 rounded-full hover:border-green-800 hover:text-green-800">
              Cancel
            </button>
            <button className="py-2 px-6 border text-sm bg-green-700 text-white rounded-full hover:bg-green-800">
              Update
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditProfile;
