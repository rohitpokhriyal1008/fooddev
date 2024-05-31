import {Component} from 'react'

class Userclass extends Component {
    constructor(props){
        super(props)
        console.log("child constructor")
        this.state = {
            userinfo: [],
        }

    }
   async componentDidMount() {
        console.log("child component did mount ")
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
         const result = await data.json()
         console.log(result)
         this.setState({
            userinfo: result
         })
         console.log(userinfo)
    }
    componentDidUpdate() {
                console.log("component did update")
    }
    componentWillUnmount() {
        console.log("component will unmount")
    }
    render() {
        console.log("child render")
        const {userinfo} = this.state
        return userinfo.length > 0 ? (
            <div className='flex flex-wrap mt-20 gap-6'>
                {
                    userinfo.map((item) => (
                        <div key={item.id} className='w-52 h-60 rounded-md p-4'> 
                         <img className='w-full h-[60%] object-cover' src={item.image} alt="" />
                         <h1>{item.name}</h1>
                        </div>
                    ))
                }
            </div>
        ) : <h1>Loading..</h1>
    }
}
export default Userclass