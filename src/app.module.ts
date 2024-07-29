import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculadoraService } from './calculadora/calculadora.service';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { AnalizadorService } from './analizador/analizador.service';
import { AnalizadorController } from './analizador/analizador.controller';

@Module({
  imports: [],
  controllers: [AppController, CalculadoraController, AnalizadorController],
  providers: [AppService, CalculadoraService, AnalizadorService],
})
export class AppModule {}
