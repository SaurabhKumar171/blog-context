import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";


const BlogPage = () => {

   const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
   const [blog , setBlog] = useState(null);
   const [relatedBlogs , setRelatedBlogs]= useState([]);
   const location = useLocation();
   const navigation = useNavigate();
   const {setLoading , loading} = useContext(AppContext);

   const blogId = location.pathname.split("/").at(-1);

   async function fetchRelatedBlogs(){
      setLoading(true);

      let url =`${newBaseUrl}get-blog?blogId=${blogId}`;

      try{
         const res = await fetch(url);
         const data = await res.json();

         setBlog(data.blog);
         setRelatedBlogs(data.relatedBlogs);
      }
      catch(error){
        console.log('Error occurred in blog call');

        setBlog(null);
        setRelatedBlogs([]);
      }

      setLoading(false);
   }

   useEffect( () =>{
      if(blogId){
         fetchRelatedBlogs();
      }

   },[location.pathname])

   return (
      
    <div className="w-11/12 max-w-[650px] my-[60px]">
       <Header></Header>

       <div className="self-start text-center py-1 border-2 w-20 rounded-md mt-12 ">
         <button className="  " onClick={ () => navigation(-1)}>Back</button>
       </div>

       <div className="mt-[-2em]">
          {
 
             loading ? (<div className="font-bold text-3xl mx-[175px] my-[250px]"><p>Loading ...</p></div>):( blog ? (<div>
               <BlogDetails post={blog}/>
               <h2 className="font-bold text-3xl mt-[35px]">Related Blogs</h2>
               {
                   relatedBlogs.map( (post) => (
                     <div key={post.id}>
                        <BlogDetails post={post}/>
                     </div>
                   ))
               }
            </div>):(<div><p>No blogs found</p></div>))
             
          }
       </div>
    </div>
   )
}

export default BlogPage;