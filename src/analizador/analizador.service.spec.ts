import { Test, TestingModule } from '@nestjs/testing';
import { AnalizadorService } from './analizador.service';
import { CalculadoraService } from '../calculadora/calculadora.service';

describe('AnalizadorService', () => {
  let service: AnalizadorService;
  let calculadoraService: CalculadoraService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalizadorService, CalculadoraService],
    }).compile();

    service = module.get<AnalizadorService>(AnalizadorService);
    calculadoraService = module.get<CalculadoraService>(CalculadoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('debería identificar números pares', () => {
    expect(service.esPar(4)).toBe('El número 4 es par');
    expect(service.esPar(5)).toBe('El número 5 es impar');
  });

  it('debería convertir números a letras', () => {
    expect(service.convertirNumeroALetras(4)).toBe('cuatro');
    expect(service.convertirNumeroALetras(10)).toBe('uno cero');
  });

  it('debería mostrar un mensaje divertido para números impares', () => {
    expect(service.mensajeDivertido()).toBe('¡Que número tan raro!');
    expect(service.mensajeDivertido()).toBe('¡Que número tan raro!');
  });

  it('debería analizar y retornar el mensaje correcto', () => {
    jest.spyOn(calculadoraService, 'sumar').mockImplementation(() => 4);
    expect(service.analizarResultado('suma', 2, 2)).toBe(
      'El número 4 es par. Número en letras: cuatro.'
    );

    jest.spyOn(calculadoraService, 'sumar').mockImplementation(() => 3);
    expect(service.analizarResultado('suma', 1, 2)).toBe(
      'El número 3 es impar. ¡Que número tan raro!'
    );
  });

  it('debería analizar y retornar el mensaje correcto para suma', () => {
    jest.spyOn(calculadoraService, 'sumar').mockImplementation(() => 3);
    expect(service.analizarResultado('suma', 1, 2)).toBe('El número 3 es impar. ¡Que número tan raro!');
  });

  it('debería analizar y retornar el mensaje correcto para resta', () => {
    jest.spyOn(calculadoraService, 'restar').mockImplementation(() => 4);
    expect(service.analizarResultado('resta', 6, 2)).toBe('El número 4 es par. Número en letras: cuatro.');
  });

  it('debería analizar y retornar el mensaje correcto para multiplicación', () => {
    jest.spyOn(calculadoraService, 'multiplicar').mockImplementation(() => 9);
    expect(service.analizarResultado('multiplicacion', 3, 3)).toBe('El número 9 es impar. ¡Que número tan raro!');
  });

  it('debería lanzar una excepción para una operación no soportada', () => {
    expect(() => service.analizarResultado('division', 4, 2)).toThrow('Operación no soportada');
  });
});
