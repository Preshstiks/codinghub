import { db } from "@/services/firebase";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";

import Image from "next/image";

const GeneralPosts = () => {
  const fetchBlogs = async () => {
    const docRef = collection(db, "generalBlogs");
    const getData = await getDocs(docRef);
    const docs = [];
    getData.forEach((doc) => {
      docs.push({ id: doc.id, ...doc.data() });
    });
    return docs;
  };
  const { data } = useQuery(["generalblog"], fetchBlogs);
  console.log(data);

  return (
    <div>
      {data &&
        data?.map((blog) => {
          return (
            <div className="flex items-center justify-between py-4">
              <div className="font-instrumental w-[100%]">
                <div className="flex gap-2 items-center">
                  <Image
                    className="w-5 h-5 rounded-full"
                    style={{ objectFit: "cover" }}
                    height={30}
                    width={30}
                    src={
                      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    }
                  />
                  <span className="text-xs font-medium">
                    {blog.authorFullName}
                  </span>
                </div>
                <h1 className="font-medium">{blog.title}</h1>
                <span className="text-neutral-500 text-sm font-normal">
                  {blog.subTitle}
                </span>
                <div className="flex items-center">
                  <span className="text-xs text-neutral-500 font-light">
                    May 19
                  </span>
                  <div className="text-xs text-neutral-500 font-light mx-1">
                    .
                  </div>
                  <span className="text-xs text-neutral-500 font-light">
                    7 mins read
                  </span>
                </div>
              </div>
              <div>
                <Image
                  className="sm:w-[200px] sm:h-[150px] w-[90] h-[90]"
                  src={
                    "https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  }
                  height={200}
                  width={200}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GeneralPosts;
