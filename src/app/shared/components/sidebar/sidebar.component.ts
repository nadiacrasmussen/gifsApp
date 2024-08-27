import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private gisfService :GifsService){}
  //creamos metodo para obtener los tags y los mostramos a usando un ngfor en el html
  get tags(){
return this.gisfService.tagsHistory;
  }
searchTag(tag :string){
  this.gisfService.searchTag(tag);
}

}
