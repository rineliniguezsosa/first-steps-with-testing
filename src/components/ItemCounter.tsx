interface Props {
  name:string,
  quantity:number
}

export const ItemCounter = ({name,quantity}:Props) => {
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
        <button>+1</button>
        <span>{quantity}</span>
        <button>-1</button>
    </section>
  )
}
