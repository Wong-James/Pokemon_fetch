import React, {Component} from "react"

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
            name : "James"
        }
    }
    handleClick = () => {
        this.setState({
            let newCount = this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Click this if you like pineapples</h1>
                <p>{this.state.count}This many people like pineapples</p>
                <buttons onclick={this.handleClick}>Click Me!</buttons>
            </div>
        )
    }
}

export default Counter