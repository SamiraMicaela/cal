import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculadoraService],
    }).compile();

    service = module.get<CalculadoraService>(CalculadoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('debería sumar correctamente', () => {
    const resultado = service.sumar(1, 2);
    expect(resultado).toBe(3);
  });

  it('debería restar correctamente', () => {
    const resultado = service.restar(5, 3);
    expect(resultado).toBe(2);
  });

  it('debería multiplicar correctamente', () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });
});
