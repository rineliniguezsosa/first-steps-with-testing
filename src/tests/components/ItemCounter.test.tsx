import { render,screen,fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
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
        // console.log(screen.debug());
        
    })
    test('El botón debe de incrementar en 1',async()=>{
            render(<ItemCounter name={'Test item'} quantity={5} />);
            
            const buttonAdd = screen.getByRole('button', { name: /\+1/ });

            screen.debug();

            fireEvent.click(buttonAdd);

            screen.debug();

            expect(screen.getByText('6')).toBeInTheDocument();
    })
});