import { ItemCounter } from "./ItemCounter"

export const FirstStepsApp = () => {
  return (
    <div>
         <h1>Carrito de compras</h1>

         <ItemCounter name="Nintendo switch"/>
         <ItemCounter name="Xbox one"/>
         <ItemCounter name="Wii"/>
    </div>
  )
}
