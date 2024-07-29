import { Test, TestingModule } from '@nestjs/testing';
import { AnalizadorController } from './analizador.controller';
import { AnalizadorService } from './analizador.service';
import { CalculadoraService } from '../calculadora/calculadora.service';

describe('AnalizadorController', () => {
  let controller: AnalizadorController;
  let service: AnalizadorService;
  let calculadoraService: CalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalizadorController],
      providers: [AnalizadorService, CalculadoraService]
    }).compile();

    controller = module.get<AnalizadorController>(AnalizadorController);
    service = module.get<AnalizadorService>(AnalizadorService);
    calculadoraService = module.get<CalculadoraService>(CalculadoraService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('debería mostrar que es par (usando spyOn)', () => {
    const resultado = 4;
    jest.spyOn(calculadoraService, 'sumar').mockImplementation(() => resultado);

    const operacion = 'suma';
    const a = 2;
    const b = 2;

    expect(controller.analizar(operacion, a, b)).toBe(
      `El número ${resultado} es par. Número en letras: cuatro.`
    );
  });

  it('debería mostrar un mensaje divertido cuando es impar (usando spyOn)', () => {
    const resultado = 3;
    jest.spyOn(calculadoraService, 'sumar').mockImplementation(() => resultado);

    const operacion = 'suma';
    const a = 1;
    const b = 2;

    const mensajeDivertido = `El número ${resultado} es impar. ¡Que número tan raro!`;
    expect(controller.analizar(operacion, a, b)).toBe(mensajeDivertido);
  });
});
