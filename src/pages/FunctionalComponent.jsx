import React,{useState} from "react";
import BaseHoc from "../hoc/BaseHoc";

const FunctionalComponent = (props) => {
    const [count,setCount] = useState(0)
    const reduceCount = () =>{
        setCount(count-1);
    }
    return(
        <div>
            <p>This is Functional Component</p>
            <button onClick = {()=>setCount(count+1)}>Click me to increament by one</button>
            <button onClick = {reduceCount}>Click here to decrement</button>
            <h2>{count}</h2>
            <h4>My company is:{props.name} it is of {props.age} years old and the author would be {props.author} </h4>
            <button onClick = {() => props.setName("Likhitha")}>change name to likhitha</button>
        </div>
    )
}

export default BaseHoc(FunctionalComponent);

// props:{
//     name:"DevTown",
//     age:20,
//     author:"rk"
// }