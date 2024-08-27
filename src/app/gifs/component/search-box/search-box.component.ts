import { Component, ElementRef, ViewChild, viewChild,  } from '@angular/core';
import { GifsService} from '../../service/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
 (keyup.enter)="searchTag()"
  #txtTagInput >

  `
})

export class SearchBoxComponent {


  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
//con el !:elementRef<HTMLiNPUTElement> le digo que siempre va a tener un valor. reemplza newTag:string


  constructor(private gisfService :GifsService) { }
  //crea el metodo newtag que recibe un string para la busqueda de eso que recibe
  // (es el texto que recibe el input)
  //searchTag(newTag :string){
    searchTag(){
      const newTag = this.tagInput.nativeElement.value
   this.gisfService.searchTag(newTag);
   this.tagInput.nativeElement.value = '';//para que se limpie la caja de texto

  }


}
