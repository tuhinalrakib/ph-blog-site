import React from 'react';

const Blog = ({blog}) => {
    const {id,cover} = blog
    return (
        <div>
            <img src={cover} />
        </div>
    );
};

export default Blog;