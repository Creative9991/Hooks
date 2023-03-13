import { useEffect, useState } from "react";
import "../../src/styles.css";

const UseEffectTutorial = () => {
  const [posts, setPosts] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchData().catch(console.error);
  }, [posts]);

  const inputOnChange = (e) => {
    setName(e.target.value);
    if (name.length === 8) {
      setDisabled(true);
      e.preventDefault();
    }
  };

  const listOf = posts.map((post) => {
    return (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>
    );
  });

  return (
    <div className="use-effect">
      <table className="my-table">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Name</th>
          </tr>
          {listOf}
        </tbody>
      </table>
      <input type="text" value={name} onChange={(e) => inputOnChange(e)} />
      <button type="button" disabled={disabled}>
        Click
      </button>
      <br />
      <br />
    </div>
  );
};

export default UseEffectTutorial;
