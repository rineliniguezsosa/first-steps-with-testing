import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAweasomeApp } from '../../components/MyAweasomeApp';

describe('Pruebas en el componente MyAweasomeApp',() =>{
    test('Deberia renderizar el contenido del componente',()=>{
        render(<MyAweasomeApp/>);

        console.log(screen.debug());

    });
    test('Deberia renderizar el nombre y el apellido',()=>{
        const { container } = render(<MyAweasomeApp/>);
        screen.debug();

        const heading = container.querySelector('h1');
        const subheading = container.querySelector('h2');
        
        expect(heading?.innerHTML).toContain('Rinel'); 
        expect(subheading?.innerHTML).toContain('Iniguez');
    });
});