import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";


const TagPage = () => {

     const navigate = useNavigate();

     const location = useLocation();
     const tag = location.pathname.split("/").at("-1").replaceAll("-"," ");


   return (
    <div>
       <Header></Header>

       <div>
         <div className="flex gap-x-4 py-1 w-full rounded-md mt-24 mb-[-5em] ml-[39em] items-baseline"> 
              <button onClick={() => navigate(-1)} className="text-center border-2 w-16 rounded-md py-1 px-4">Back</button>

              <h2 className="font-bold text-lg">
              Blogs Tagged <span className="underline text-blue-600">#{`${tag}`}</span>
              </h2>
          </div>
          
          <div className="flex justify-center items-center">
             <Blogs></Blogs>
             <Pagination></Pagination>
          </div> 
       </div>
    </div>
   )
}

export default TagPage;