import { Controller, Get, ParseFloatPipe, Query } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
    constructor(private readonly calculadoraService: CalculadoraService) { }

    @Get('sumar')
  sumar(@Query('a', ParseFloatPipe) a: number, @Query('b', ParseFloatPipe) b: number): number {
    return this.calculadoraService.sumar(a, b);
  }

    @Get('restar')
    restar(@Query('a',ParseFloatPipe) a: number, @Query('b',ParseFloatPipe) b: number): number {
        return this.calculadoraService.restar(a, b);
    }

    //ParseFloatpipe sirve para que aseguremos que todas las rutas conviertan los parámetros de consulta a números
    @Get('multiplicar')
    multiplicar(@Query('a',ParseFloatPipe) a: number, @Query('b',ParseFloatPipe) b: number): number {
        return this.calculadoraService.multiplicar(a, b);
    }
}
// Para sumar:
// http://localhost:3000/calculadora/sumar?a=5&b=3

// Para restar:
// http://localhost:3000/calculadora/restar?a=10&b=4

// Para multiplicar:
// http://localhost:3000/calculadora/multiplicar?a=6&b=7