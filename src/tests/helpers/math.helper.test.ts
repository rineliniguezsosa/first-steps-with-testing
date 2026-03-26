import { describe, expect, test } from 'vitest'
import { add, multiply, substract } from '../../helpers/math.helper'

describe('suma', () => {
    test('Deberia sumar dos números positivos',() =>{
        const result = add(1,4);
    
        console.log(result);
        expect(result).toBe(5)
        
    })

})
describe('rest', () => {
    test('Deberia restar dos números positivos',() =>{
        const result = substract(1,4);
    
        console.log(result);
        expect(result).toBe(-3)
        
    })

})
describe('Multiplicación', () => {
    test('El resultado de multiplicar un número por cero, equivale a cero',() =>{
        const result = multiply(0,4);
    
        console.log(result);
        expect(result).toBe(0)
        
    })

})
describe('Multiplicación', () => {
    test('El resultado de multiplicar dos números',() =>{
        const result = multiply(6,4);
    
        console.log(result);
        expect(result).toBe(24)
        
    })

})
