import { HomePageComponent } from './pages/home/home-page.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './component/search-box/search-box.component';
import { CardListComponent } from './pages/card-list/card-list.component';
import { CardComponent } from './component/card/card.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomePageComponent,SearchBoxComponent, CardListComponent, CardComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],

exports:[
  HomePageComponent,CardListComponent
]
})
export class GifsModule { }
