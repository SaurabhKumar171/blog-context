import React from "react";
import { NavLink } from "react-router-dom";
 
export default function BlogDetais({post}) {
  

  return (
    <div className="mt-[50px]">
        <NavLink to={`/blog/${post.id}`}>
             <span className="font-bold text-lg">{post.title}</span>
        </NavLink>
        <p className="mt-[5px] text-sm">
            By <span className="italic">{post.author} </span>
            on {" "} 
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className="underline font-bold text-sm">{post.category}</span>
            </NavLink>
        </p>

        <p className="text-sm mb-[10px]"> Posted on {post.date}</p>
        <p> {post.content}</p>
        <div  className="text-sm mt-[10px]">
            {post.tags.map( (tag,index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span className="mr-[5px] text-xs text-blue-600 underline font-semibold">{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
        
    </div>
  );
}
