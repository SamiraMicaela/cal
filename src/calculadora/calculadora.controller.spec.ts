import { Test, TestingModule } from '@nestjs/testing';
import { CalculadoraController } from './calculadora.controller';
import { CalculadoraService } from './calculadora.service';

describe('CalculadoraController', () => {
  let controller: CalculadoraController;
  let service: CalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalculadoraController],
      providers:[CalculadoraService]
    }).compile();

    controller = module.get<CalculadoraController>(CalculadoraController);
    service= module.get<CalculadoraService>(CalculadoraService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('debería sumar dos números', () => {
    const a = 2;
    const b = 3;
    const resultado = 5;
    
    jest.spyOn(service, 'sumar').mockReturnValue(resultado);

    expect(controller.sumar(a, b)).toBe(resultado);
    expect(service.sumar).toHaveBeenCalledWith(a, b);
  });

  it('debería restar dos números', () => {
    const a = 5;
    const b = 2;
    const resultado = 3;

    jest.spyOn(service, 'restar').mockReturnValue(resultado);

    expect(controller.restar(a, b)).toBe(resultado);
    expect(service.restar).toHaveBeenCalledWith(a, b);
  });

  it('debería multiplicar dos números', () => {
    const a = 4;
    const b = 3;
    const resultado = 12;

    jest.spyOn(service, 'multiplicar').mockReturnValue(resultado);

    expect(controller.multiplicar(a, b)).toBe(resultado);
    expect(service.multiplicar).toHaveBeenCalledWith(a, b);
  });
});
