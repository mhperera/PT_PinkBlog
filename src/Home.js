import BlogList from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

    const { data:blogs, isPending, error } = useFetch('http://localhost:3001/blogs');

    return (

        <div className="home">

            { error && <div>{ error }</div> }

            { isPending && <div>Loading...</div> }

            {blogs && <BlogList blogs = { blogs } title='All Blogs' />}

            {/* <BlogList blogs={ blogs.filter((blog) => ( blog.author === 'S Mario' ) ) } title='Marios Blogs' handleDelete={ handleDelete }/> */}

        </div>

    );

}

export default Home;