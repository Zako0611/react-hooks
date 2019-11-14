// import React, { Component } from 'react';

// class App3 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             count:0
//          }
//     }
//     render() { 
//         return ( <div>
//             <div>You clicked {this.state.count} times</div>
//             <button onClick={this.clickbtn.bind(this)}>click me</button>
//         </div> );
//     }
//     clickbtn(){
//         let tmp=this.state.count+1
//         this.setState({count:tmp})
//     }
//     componentDidMount(){
//         console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
//     }
//     componentDidUpdate(){
//         console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
//     }
// }

import React, { useState , useEffect } from 'react';
function App3(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })
    //---关键代码---------end-------

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}

export default App3