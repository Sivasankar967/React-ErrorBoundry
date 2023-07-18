import React from "react";
class ErrorBoundery extends React.Component{
    constructor(){
        super()
        this.state={
           hasError: false
        }
    }
    
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){ 
            return    <h1>Somthing Went wrong</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundery