import Link from "next/link";

const HeaderInfo = () => {
  return (
    <div className="bg-cyan-500 border-b border-black py-20 headerinfo xs:px-8 xs:text-center lg:px-40 md:px-20 sm:text-left">
      <h1 className="font-medium pb-6 xs:text-5xl md:text-6xl lg:text-7xl">
        Stay curious.
      </h1>
      <p className="text-xl headerinfo-para font-medium">
        Discover Stories, thinking and expertise from writers on any topic.
      </p>
      <div className="pt-9">
        <Link
          className="px-12 py-2 font-semibold bg-black text-white rounded-full headerinfo-btn"
          href="/">
          Start Reading
        </Link>
      </div>
    </div>
  );
};

export default HeaderInfo;
