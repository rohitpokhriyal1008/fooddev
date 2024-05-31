import {Component} from 'react'
import Userclass from './Userclass'

class Contact extends Component {
    constructor(props) {
        super(props)
        console.log("parent constructor")
    }
     componentDidMount() {
        console.log("parent component did mount")
         
    }
    render() {
        console.log("parent render")
        return(
            <div>
                hey did it
                <Userclass name="rohit" location="tehri"/>
            </div>
        )
    }
}

export default Contact