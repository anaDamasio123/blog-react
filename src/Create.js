import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = e => { 
        e.preventDefault();  // the default is to refresh the page, after the button is clicked
       
        const blog = { title, body, author };  // it is the variables created above

        setIsPending(true);

        fetch('http://localhost:8000/blogs/', {  // we are doing a POST request, to this endpoint; json server will automatically add the id, when creating the new blog
         method: 'POST',
         headers: { "Content-Type": "application/json" },  // content-type that has is being sent. We are telling the server the type of content that we are sending with this request; we are sending json data
         body: JSON.stringify(blog)  // actual data that we are sending; we have, first, to turn this object to a data string
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;