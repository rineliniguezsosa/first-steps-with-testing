import { describe, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAweasomeApp } from '../../components/MyAweasomeApp';

describe('Pruebas en el componente MyAweasomeApp',() =>{
    test('Deberia renderizar el nombre y el apellido',()=>{
        render(<MyAweasomeApp/>);

        console.log(screen.debug());

    });
});