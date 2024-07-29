import { Controller, Get, Query } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
    constructor(private readonly calculadoraService: CalculadoraService) { }

    @Get('sumar')
    sumar(@Query('a') a: number, @Query('b') b: number): number {
        return this.calculadoraService.sumar(a, b);
    }

    @Get('restar')
    restar(@Query('a') a: number, @Query('b') b: number): number {
        return this.calculadoraService.restar(a, b);
    }

    @Get('multiplicar')
    multiplicar(@Query('a') a: number, @Query('b') b: number): number {
        return this.calculadoraService.multiplicar(a, b);
    }
}
// Para sumar:
// http://localhost:3000/calculadora/sumar?a=5&b=3

// Para restar:
// http://localhost:3000/calculadora/restar?a=5&b=3

// Para multiplicar:
// http://localhost:3000/calculadora/multiplicar?a=5&b=3

// Para verificar si un número es par:
// http://localhost:3000/analizador/espar?numero=4

// Para convertir un número a texto:
// http://localhost:3000/analizador/numeroATexto?numero=2

// Para obtener un mensaje divertido:
// http://localhost:3000/analizador/divertido?numero=3
