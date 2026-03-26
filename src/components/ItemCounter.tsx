import { useState } from "react";
interface Props {
  name:string,
  quantity:number
}

export const ItemCounter = ({name,quantity}:Props) => {
  const [counter, setCounter] = useState( quantity);

  const handleAdd = () =>{
    if (counter === 1) return;
    setCounter(count => count +1)
  }
  const handleSubtract = () =>{
    if (counter === 1) return;
    setCounter(count => count -1)
  }
  
  return (
    <section
        style={{
            flex:1,
            alignItems:'center',
            gap:10,
            marginTop:10
        }}
    >
        <span style={{width:150}}>{name}</span>
        <button onClick={handleAdd}>+1</button>
        <span>{counter}</span>
        <button onClick={handleSubtract}>-1</button>
    </section>
  )
}
