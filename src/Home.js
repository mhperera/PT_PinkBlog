import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        setTimeout(()=>{

            fetch('http://localhost:8000/blogs') // promise

            .then(res => {

                // CHECK ERRORS COMING BACK FROM THE SERVER (This also catchs from the .catch() block) (To check change the endpoint)
                if(!res.ok){
                    throw Error('Could not fetch data for that resource.');
                }

                return res.json();
            })

            .then((data)=>{
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })

            // CHECK FOR THE NETWORK ERROR (To check this abort json server)
            .catch((err)=>{
                setIsPending(false);
                setError(err.message);
            })

        },1000)

    }, []);

    return (

        <div className="home">

            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            {blogs && <BlogList blogs={ blogs } title='All Blogs' />}

            {/* <BlogList blogs={ blogs.filter((blog) => ( blog.author === 'S Mario' ) ) } title='Marios Blogs' handleDelete={ handleDelete }/> */}

        </div>

    );

}
 
export default Home;