 import React from 'react';
import BaseHoc from '../hoc/BaseHoc';

 class ClassComponent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name : "Devtown",
            age : "5"
        }
    }
    render(){
        return (
        
                <p>This is class Components</p>
           
        );
    }
 }

 export default BaseHoc(ClassComponent);