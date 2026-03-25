import { ItemCounter } from "./ItemCounter"

export const FirstStepsApp = () => {
  interface itemCardProps {
    id:number;
    productName:string;
    quantity:number
  };
  
  const itemCard:itemCardProps[] = [
    {
      id:0,
      productName:'Nintendo Switch',
      quantity:10
    },
    {
      id:1,
      productName:'Xbox One',
      quantity:20
    },
    {
      id:2,
      productName:'Wii',
      quantity:20
    },
  ];
  
  return (
    <div>
         <h1>Carrito de compras</h1>

         {
          itemCard.map(({id,productName,quantity}) => (
            <ItemCounter key={id} name={productName} quantity={quantity}/>
          ))
        }
    </div>
  )
}
