import BlogList from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

    const { data:blogs, isPending, error } = useFetch('https://6435c402537112453fdf0bf0.mockapi.io/api/v1/blogs');

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