import { useState } from 'react';
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
            author: 'Tiger Sheroff'
        }
    ])

    return (

        <div className="home">
            
            <BlogList blogs={ blogs } title='All Blogs'/>

        </div>

    );

}
 
export default Home;