import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog , error, isPending } = useFetch(`https://6435c402537112453fdf0bf0.mockapi.io/api/v1/blogs/` + id );
    const history = useHistory();

    const handleClick = () => {

        fetch('https://6435c402537112453fdf0bf0.mockapi.io/api/v1/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(()=>{
            history.push('/');
        })

    }

    return (
        <div className="blog-details">

            { isPending && <div>Loading...</div> }

            { error && <div>{ error }</div> }

            { blog && (
                <article>

                    <h2>{ blog.title }</h2>

                    <br />

                    <p>Written By : { blog.author } </p>

                    <br />

                    <p> { blog.body } </p>

                    <button onClick={ handleClick }>Delete</button>

                </article>
            ) }

        </div>
    );
}

export default BlogDetails;