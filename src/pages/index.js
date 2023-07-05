import Head from "next/head";
import Image from "next/image";
import HeaderInfo from "../../components/HeaderIntro";
import MainBody from "../../components/MainBody";
import MainBody2 from "../../components/MainBody2";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase";
import Link from "next/link";
export default function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);

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
    <>
      <Head>
        <title>Medium | Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      {isAuthenticated ? (
        <div className="pt-20">
          <div className="ml-4 pl-6 mb-10 w-[60%] pb-2 border-b border-gray-300">
            <span className="border-b pb-2 border-black">For You</span>
          </div>
          {data &&
            data?.map((blog) => {
              return (
                <div key={blog?.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <div className="grid grid-cols-2 pl-6 ml-4 border-b border-gray-300 w-[60%] lg: space-x-10 space-x-15 py-4 items-center">
                      <div className="font-instrumental">
                        <div className="flex gap-2 items-center">
                          <Image
                            className="w-5 h-5 rounded-full"
                            style={{ objectFit: "cover" }}
                            height={30}
                            width={30}
                            src={
                              "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            }
                            alt="profile-pic"
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
                            {blog.Date}
                          </span>
                          <div className="text-xs text-neutral-500 font-light mx-1">
                            .
                          </div>
                          <span className="text-xs text-neutral-500 font-light">
                            {blog.readTime} read
                          </span>
                        </div>
                      </div>
                      <div>
                        <Image
                          className="sm:w-[150px] sm:h-[150px] w-[90] h-[90]"
                          src={
                            "https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                          }
                          height={200}
                          width={200}
                          style={{ objectFit: "cover" }}
                          alt="blog-pic"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      ) : (
        <div>
          <HeaderInfo />
          <MainBody />
          <MainBody2 />
        </div>
      )}
    </>
  );
}
