import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "../../components/FirstStepsApp";

vi.mock('../../components/ItemCounter',() => ({
    ItemCounter:(props:unknown) => <div name={props.name} quantity={props.quantity} data-testid="ItemCounter"/>
}))

describe('Pruebas en el componente FirstStepApp', () => { 
    afterEach(()=>{
        vi.clearAllMocks()
    })
    test('Debe de coincidir con el snapshoot', () => { 
        const { container } = render(<FirstStepsApp/>)

        expect(container).toMatchSnapshot();
    })
    test('Debe de renderizar la correcto numero de ItemCounter component',()=>{
        render(<FirstStepsApp/>)

        const itemCounter = screen.getAllByTestId('ItemCounter');

        expect(itemCounter.length).toBe(3)

        screen.debug();
    })
})