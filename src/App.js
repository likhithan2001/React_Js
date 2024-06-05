import './App.css';
import ClassComponent from './pages/ClassComponent';
import FunctionalComponent from './pages/FunctionalComponent';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
// HOC Layout
import BaseHoc from './hoc/BaseHoc';


function App() {
    const author = "rk";
    const [name, setName] = useState("DT");
    return ( <
        Routes >
        <
        Route path = '/'
        element = { < BaseHoc > < ClassComponent / > < /BaseHoc> } /
            > ; <
            Route path = '/functional-component'
            element = { < BaseHoc > < FunctionalComponent
                name = { name }
                age = { 10 }
                author = { author }
                setName = { setName }
                / ></BaseHoc >
            }
            / > ;

            <
            /Routes>
        );
    }

    export default App;

    // <
    // p > Class component < /p> <
    // ClassComponent > < /ClassComponent>  <
    // br / >
    // <
    // p > Functional Component < /p> <
    // FunctionComponent name = { name }
    // age = { 20 }
    // author = { author }
    // setName = { setName } > < /FunctionComponent>