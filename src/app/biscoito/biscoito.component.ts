import { Component } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  bisQuebradu: boolean = false;

  BisQuebradu(e: boolean) {
    this.bisQuebradu = e;
  }

}
