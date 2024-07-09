import "./App.css";
import Header from "./Header";
import Content from "./Content";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import Value from "./Value";
import {HashRouter} from "react-router-dom"
function App() {
  const [items, setItems] = useState([]);
  
  function change(id) {
    const tick = items.map((work) =>
      work.id === id ? { ...work, checked: !work.checked } : work
    );
    setItems(tick);
    localStorage.setItem("to", JSON.stringify(tick));
  }
  function btn(id) {
    const del = items.filter((work) => work.id !== id);
    setItems(del);
    localStorage.setItem("to", JSON.stringify(del));
  }
  const [inpu, setInpu] = useState();

  function btnn(e) {
    e.preventDefault();
    addtodo(inpu);
    console.log(inpu);
    setInpu("");
  }

  function addtodo(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const add = { id, checked: false, item };
    let suma = [...items, add];
    setItems(suma);
    localStorage.setItem("to", JSON.stringify(suma));
  }
  let [search, setSearch] = useState();
useEffect(()  => {
  (JSON.parse(localStorage.getItem("to")));
  
}, [])
  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <Content />

      <Value inpu={inpu} btnn={btnn} addtodo={addtodo} setInpu={setInpu} />

      <Todo
        items={items.filter((work) => work.item.toLowerCase().includes(search))}
        change={change}
        btn={btn}
      />
    </div>
  );
}
function RouterApp () {
  return <HashRouter basename="/">
    <App/>
  </HashRouter>
}

export default RouterApp;
