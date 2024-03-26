import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {

  frases: any = ["Sonhos são caminhos construídos pelo coração.",
            "Impossível é uma palavra que serve só de enfeite no dicionário.",
            "Dias nublados guardam o sol atrás deles.",
            "Permita que o seu corpo descanse.",
            "Tenha coragem para se tornar aquilo que sonha.",
            "Não tenha medo de sonhar. Tenha medo de não acreditar em você.",
            "Confie no que a vida planejou para você!",
            "Só os Loucos Sabem.",
            "Eu nasci pobre, mas não nasci otário.",
            "Sorcerer of death's construction."];

  min = 0;
  max = this.frases.length - 1;

  fExibida = this.frases[Math.floor(Math.random()*(this.max - this.min + 1))+this.min];

  @Input() esconder : boolean =  false;



}
