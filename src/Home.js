import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title : 'My new website',
            body : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...',
            author: 'S Mario'
        },
        {
            id: 2,
            title : 'Welcome Party',
            body : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...',
            author: 'Bobby Diol'
        },
        {
            id: 3,
            title : 'Web Dev tool tips',
            body : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...',
            author: 'S Mario'
        }
    ]);

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( blog =>  blog.id != id );
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    }, [name]);

    return (

        <div className="home">
            
            <BlogList blogs={ blogs } title='All Blogs' handleDelete={ handleDelete }/>

            <br />

            <button onClick={()=> setName('Luigi')}>Click me</button>

            <p>{ name }</p>    
            
            {/* <BlogList blogs={ blogs.filter((blog) => ( blog.author === 'S Mario' ) ) } title='Marios Blogs' handleDelete={ handleDelete }/> */}

        </div>

    );

}
 
export default Home;