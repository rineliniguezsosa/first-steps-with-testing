import { render,screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "../../components/ItemCounter";

describe('Pruebas en el componente ItemCounter',()=>{
    test('Deberia de renderizar con el valor por defecto',()=>{
        const name = "Xbox 360";
        const quantity = 20;
        render(<ItemCounter name={name} quantity={quantity}/>);

        console.log(screen.debug());
        
    })
    test('Deberia de renderizar con el name y quantity',()=>{
        const name = "Xbox 360";
        const quantity = 20;
        render(<ItemCounter name={name} quantity={quantity}/>);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(quantity)).toBeDefined();
        console.log(screen.debug());
        
    })
})