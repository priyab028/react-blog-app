import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('priyanka');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};
    setIsLoading(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsLoading(false);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog title:</label>
        <input 
          type="text"
          required 
          value={title}
          onChange={ (e) => setTitle(e.target.value)}
        />

      <label>Blog body:</label>
      <textarea 
      required
      value={body}
      onChange={ (e) => setBody(e.target.value)}
      >
        
      </textarea>
      <label>Blog author:</label>
      <select
      value={author}
      onChange={(e) => setAuthor(e.target.value) }
      >
        <option value="priyanka">Priyanka</option>
        <option value="yoshi">yoshi</option>
      </select>
      {!isLoading && <button>add blog</button>}
      {isLoading && <button disabled>adding blog...</button>}
      </form>
    </div>
  );
}

export default Create;