import "./App.css";
import Card from "./components/card";

function App() {
  // declare a variable
  //const [count, setCount] =  useState(0)

  let myObj = {
    username: "shubham",
    age: 22,
  };

  let nArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>

      <Card channel="chai aur Lemon Tea" someObj={myObj} someArr={nArr}></Card>
    </>
  );
}

export default App;
