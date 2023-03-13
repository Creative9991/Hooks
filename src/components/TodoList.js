import React from "react";
import HOC from "./HOC";
const TodoList = ({ data }) => {
  // const [todos, setTodos] = useState([]);
  // const [term, setTerm] = useState("");

  let renderedTodos = data.slice(1, 10).map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Heeeeey")
  //       console.log(data);
  //       setTodos(data);
  //     });
  // }, []);

  // let filteredTodos = todos.filter(({title}) => {
  //   return title.indexOf(term) >=0;
  // }).slice(0,10).map((todo)=>{
  //   return(
  //     <ul key={todo.userId}>
  //     <li>{todo.title}</li>
  //     </ul>
  //   )
  // })

  return <div>{renderedTodos}</div>;
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
