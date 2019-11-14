import React, { useState,useMemo } from 'react'

function App7() {
    const [yanzu, setYanzu] = useState("yanzu在等你")
    const [yuyan, setYuyan] = useState("yuyan在等你")
    return (
        <div>
            <button onClick={()=>{setYanzu(new Date().getTime())}}>彦祖</button>
            <button onClick={()=>{setYuyan(new Date().getTime()+"yuyan111")}}>鱼眼</button>
            <ChildComponent name={yanzu}>{yuyan}</ChildComponent>
        </div>
    )
}

function ChildComponent({name,children}){
    function changeYanzu(name){
        console.log("11111111111111111111111")
        return name +",111111"
    }

    const actionYanzu= useMemo(()=>changeYanzu(name),[name])

    return(
        <>
            <div>{actionYanzu}</div>
            <div>{children}</div>
        </>
    )

}

export default App7