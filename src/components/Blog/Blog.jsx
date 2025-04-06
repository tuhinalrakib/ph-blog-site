import React from 'react';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, hashtags, reading_time} = blog

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={cover}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-around items-center">
                        <h3>{author}</h3>
                        <img className='w-16' src={author_img} alt="author" />
                        <button onClick={()=>handleBookmark(blog)}><FaBookmark size={25}/></button>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className='flex'>
                        {
                            hashtags.map((hash,index)=><p key={index}>{hash}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleMarkAsRead(reading_time, id)} className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;