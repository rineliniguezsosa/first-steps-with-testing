import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { FirstStepsApp } from "../../components/FirstStepsApp";

describe('Pruebas en el componente FirstStepApp', () => { 
    test('Debe de coincidir con el snapshoot', () => { 
        const { container } = render(<FirstStepsApp/>)

        expect(container).toMatchSnapshot();
    })
})