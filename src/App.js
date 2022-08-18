import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const userList = useSelector((state) => state.users.value);
  console.log(userList);
  return (
    <div className="App">
      <div className=" addUser">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="User Name" />
        <button> Add User</button>
      </div>
      <div className=" displayUsers"></div>
    </div>
  );
}

export default App;
