import React from "react";
import Child from "./Child";
import ErrorBoundery from "./ErrorBoundry";

class Parent extends React.Component{
    render(){
        return(
            <div>
                <h1>Parent</h1>
                <ErrorBoundery>

                <Child/>
                </ErrorBoundery>
            </div>
        )
    }
}

export default Parent