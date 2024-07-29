import { Controller, Get, Query, Param } from '@nestjs/common';
import { AnalizadorService } from './analizador.service';

@Controller('analizador')
export class AnalizadorController {
    constructor(private readonly analizadorService: AnalizadorService) { }

  @Get('analizar')
  analizar(
    @Query('operacion') operacion: string,
    @Query('a') a: number,
    @Query('b') b: number
  ): string {
    return this.analizadorService.analizarResultado(operacion, a, b);
  }
}
