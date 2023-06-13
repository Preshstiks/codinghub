import Image from "next/image";

const UserPosts = () => {
  return (
    <div>
      <div className="py-10">
        <div className="bg-neutral-100 p-5 border border-neutral-300 my-5">
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
        </div>
        <div className="bg-neutral-100 p-5 border border-neutral-300 my-5">
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
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
