import React from "react";

class Child extends React.Component{
    constructor(){
        super()
        throw new Error('This is error')
    }
    render(){
        return(
            <div>
                <h1>Child</h1>
            </div>
        )
    }
}

export default Child