import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAweasomeApp } from '../../components/MyAweasomeApp';

describe('Pruebas en el componente MyAweasomeApp',() =>{
    test('Deberia renderizar el nombre y el apellido',()=>{
        render(<MyAweasomeApp/>);

        console.log(screen.debug());

    });
    test('Deberia renderizar el nombre Rinel',()=>{
        const { container } = render(<MyAweasomeApp/>);
        screen.debug();
        const heading = container.querySelector('h1');
        expect(heading?.innerHTML).toContain('Rinel'); 
    });
});