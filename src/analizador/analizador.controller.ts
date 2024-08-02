import { Controller, Get, Query, Param, ParseFloatPipe } from '@nestjs/common';
import { AnalizadorService } from './analizador.service';

@Controller('analizador')
export class AnalizadorController {
    constructor(private readonly analizadorService: AnalizadorService) { }

  @Get('analizarResultado')
  analizar(
    @Query('operacion') operacion: string,
    @Query('a', ParseFloatPipe) a: number,
    @Query('b', ParseFloatPipe) b: number
  ): string {
    return this.analizadorService.analizarResultado(operacion, a, b);
  }
}

//suma
//http://localhost:3000/analizador/analizarResultado?operacion=suma&a=5&b=3

//restaa
//http://localhost:3000/analizador/analizarResultado?operacion=resta&a=10&b=4

//multiplicacion
//http://localhost:3000/analizador/analizarResultado?operacion=multiplicacion&a=6&b=7