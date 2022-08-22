import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog =>  blog.id !== id );
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs') // promise
        .then(res => {
            return res.json();
        })
        .then((data)=>{
            setBlogs(data);
        })
    }, []);

    return (

        <div className="home">
            
            {blogs && <BlogList blogs={ blogs } title='All Blogs' handleDelete={ handleDelete }/>}

            {/* <BlogList blogs={ blogs.filter((blog) => ( blog.author === 'S Mario' ) ) } title='Marios Blogs' handleDelete={ handleDelete }/> */}

        </div>

    );

}
 
export default Home;