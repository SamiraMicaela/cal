import { Injectable } from '@nestjs/common';
import { CalculadoraService } from '../calculadora/calculadora.service';

@Injectable()
export class AnalizadorService {
    constructor(private calculadoraService: CalculadoraService) { }

    esPar(numero: number): string {
        if (numero % 2 === 0) {
          return `El número ${numero} es par`;
        }
        return `El número ${numero} es impar`;
      }
    
      convertirNumeroALetras(numero: number): string {
        const letras = [
          'cero', 'uno', 'dos', 'tres', 'cuatro',
          'cinco', 'seis', 'siete', 'ocho', 'nueve'
        ];
        return numero.toString().split('').map(digito => letras[parseInt(digito, 10)]).join(' ');
      }
    
      mensajeDivertido(): string {
        return '¡Que número tan raro!';
      }
    
      analizarResultado(operacion: string, a: number, b: number): string {
        let resultado: number;
        if (operacion === 'suma') {
          resultado = this.calculadoraService.sumar(a, b);
        } else if (operacion === 'resta') {
          resultado = this.calculadoraService.restar(a, b);
        } else if (operacion === 'multiplicacion') {
          resultado = this.calculadoraService.multiplicar(a, b);
        } else {
          throw new Error('Operación no soportada');
        }
    
        const esPar = this.esPar(resultado);
        if (resultado % 2 === 0) {
          const letras = this.convertirNumeroALetras(resultado);
          return `${esPar}. Número en letras: ${letras}.`;
        } else {
          const mensaje = this.mensajeDivertido();
          return `${esPar}. ${mensaje}`;
        }
      }
}
