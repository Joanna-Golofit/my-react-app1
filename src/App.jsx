import "./App.css";
import Button from "./components/button/Button";
import TodoList from "./components/todoList/TodoList";
// import PropTypes from "prop-types";

function App() {
  const books = [
    {
      id: 1,
      name: "REACT for beginners",
      isNew: true,
    },
    {
      id: 2,
      imgUrl: "https://unsplash.it/960/480",
      name: "adding components",
      isNew: false,
    },
    {
      id: 3,
      name: "use import/export",
      isNew: true,
      imgUrl: "https://picsum.photos/id/237/320/240",
    },
    {
      id: 4,
      name: "create, map and print out a LIST ",
      isNew: false,
    },
    {
      id: 5,
      name: "conditional rendering",
      isNew: false,
    },
    {
      id: 6,
      name: "PropTypes",
      isNew: false,
    },
  ];

  return (
    <>
      <h1>My first REACT todo list</h1>
      <p> which can do almost nothing ;/</p>
      <br/>
      <input type="text" />
      <Button style={{color: "red"}} text={"Add"} />

      <TodoList items={books} />
    </>
  );
}

//==============tu niedziala bo? nie przekazujemy argumentow?
// App.propTypes = {
//  items: PropTypes.object,
//  type: PropTypes.number,
// }

export default App;
