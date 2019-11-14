import React, { useState } from 'react';

function App2(){
    const [ age , setAge ] = useState(18);
    const [ sex  , setCount ] = useState("男");
    const [ name ,setName]=useState("zako");
    return (
        <div>
            <p>JSPang 今年:{age}岁</p>
            <p>性别:{sex}</p>
            <p>名字是:{name}</p>
        </div>
    )
}

// let showSex = true
// function App2(){
//     const [ age , setAge ] = useState(18)
//     if(showSex){
//         const [ sex , setSex ] = useState('男')
//         showSex=false
//     }
   
//     const [ work , setWork ] = useState('前端程序员')
//     return (
//         <div>
//             <p>JSPang 今年:{age}岁</p>
//             <p>性别:{sex}</p>
//             <p>工作是:{work}</p>
            
//         </div>
//     )
// }

export default App2;