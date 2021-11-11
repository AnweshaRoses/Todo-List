// import logo from './logo.svg';
import './App.css';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import React, {useState , useEffect} from 'react';
import { AddTodo } from './Components/AddTodo';

function App() {
  let initTodo;
 if( localStorage.getItem("todos")===null){
  initTodo=[];
 }
 else{
   initTodo=JSON.parse(localStorage.getItem("todos"));
 }

  const onDelete=(todo)=>{
    console.log("onDelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title, desc)=>{
    console.log("Adding to todo list",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{

     sno=todos[todos.length-1].sno+1
    }
    const myTodo={
      sno:sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo])
    
    
  }
  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));

  }, [todos])
  return (
    <>
    <Header title="My Todo List"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;

