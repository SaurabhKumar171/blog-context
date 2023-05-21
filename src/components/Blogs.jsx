import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetais from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col max-w-[660px] w-11/12 mt-[50px] mb-[100px]">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading ...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
            <BlogDetais key={post.id} post={post}/>
        ))
      )}
    </div>
  );
}
