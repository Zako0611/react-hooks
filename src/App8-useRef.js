import React ,{useRef} from 'react'

function App8(){

    const inputEl = useRef(null)
    const onBtnClick=()=>{
        inputEl.current.value="Hello ,zako"
        console.log(inputEl) 
    }
    return (
        <div>
            <input ref={inputEl}  type="text"/>
            <button onClick={onBtnClick}>1111111</button>
        </div>

    )
}
export default App8
