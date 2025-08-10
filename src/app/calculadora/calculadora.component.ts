import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  somar(){
    console.log("Chamando o metodo para calcular o resultado");
    this.resultado = this.numero1 + this.numero2;
  }

  subtrair(){
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
  }
  
  dividir(){
    this.resultado = this.numero1 / this.numero2;
    return this.resultado.toFixed(2)
  }
}
