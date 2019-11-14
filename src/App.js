// import React, { Component } from 'react';

// class App extends Component {
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
// }

import React, { useState } from 'react';
function App(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}


export default App;