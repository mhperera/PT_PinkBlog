import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs') // promise
            .then(res => {
                return res.json();
            })
            .then((data)=>{
                setBlogs(data);
                setIsPending(false);
            })
        },1000)
    }, []);

    return (

        <div className="home">

            { isPending && <div>Loading...</div> }

            {blogs && <BlogList blogs={ blogs } title='All Blogs' />}

            {/* <BlogList blogs={ blogs.filter((blog) => ( blog.author === 'S Mario' ) ) } title='Marios Blogs' handleDelete={ handleDelete }/> */}

        </div>

    );

}
 
export default Home;