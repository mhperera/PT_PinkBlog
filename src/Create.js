import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('S Mario');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault(); // prevent the page being refreshing
        const blog = { title, body, author };
        setIsPending(true);
        fetch('https://6435c402537112453fdf0bf0.mockapi.io/api/v1/blogs',{
            method : 'POST',
            headers : { 'Content-Type':'application/json' },
            body : JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1); // go one back
            // history.go(+1); // go one Forward
            history.push('/'); // redirect to a specific url
        })



    }

    return (
        <div className="create">

            <h2>Add a New Blog</h2>

            <form onSubmit = { handleSubmit }>

                <label>Blog Title : </label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange = {(e)=>setTitle(e.target.value)}
                />

                <label>Blog Body : </label>
                <textarea
                    required
                    value={ body }
                    onChange = {(e)=>setBody(e.target.value)}
                ></textarea>

                <label>Blog Author : </label>
                <select
                    required
                    value={ author }
                    onChange = {(e)=>setAuthor(e.target.value)}
                >
                    <option value="S Mario">S Mario</option>
                    <option value="Jonathan F">Jonathan F</option>
                    <option value="Bucky Robberts">Bucky Robberts</option>
                    <option value="Luke Bean">Luke Bean</option>
                </select>

                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}

                {/* <p>{ title }</p> */}
                {/* <p>{ body }</p> */}
                {/* <p>{ author }</p> */}

            </form>

        </div>
    );
}

export default Create;