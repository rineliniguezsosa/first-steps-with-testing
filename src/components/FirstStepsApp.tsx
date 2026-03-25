import { ItemCounter } from "./ItemCounter"

export const FirstStepsApp = () => {
  return (
    <div>
         <h1>Carrito de compras</h1>

         <ItemCounter name="Nintendo switch" quantity={10}/>
         <ItemCounter name="Xbox one" quantity={20}/>
         <ItemCounter name="Wii" quantity={1}/>
    </div>
  )
}
