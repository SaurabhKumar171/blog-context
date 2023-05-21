import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Home from './Pages/Home'
import BlogPage from "./Pages/BlogPage";
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  


  //use search 
  const[searchParams , setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {

     const page = searchParams.get("page") ?? 1;

     if(location.pathname.includes("tags")){

      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page) , tag);
     }

     else if(location.pathname.includes("categories")){

        const category = location.pathname.split("/").at(-1);
        fetchBlogPosts(Number(page),null , category);

     }

     else{
      fetchBlogPosts(Number(page));
     }
     
  }, [location.pathname, location.search]);

  return (
     <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/blog/:blogId" element={<div className="flex justify-center items-center w-full"><BlogPage/></div>}/> 
         <Route path="/tags/:tag" element={<TagPage/>}/> 
         <Route path="/categories/:category" element={<CategoryPage/>}/> 
     </Routes>
  );
}
