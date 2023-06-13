import Image from "next/image";

const Comments = () => {
  return (
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
            <span className="text-gray-400">about 21 hours ago</span>
          </div>
        </div>
        <p className="max-w-[300px] text-sm leading-6">
          I am so guilty of this one in personal projects! Hack hack hack! Done!
          It is working fine now, so I am sure it will be fine in the future”.
        </p>
      </div>
    </div>
  );
};

export default Comments;
