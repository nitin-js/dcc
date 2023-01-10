import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {GalleriaModule} from 'primeng/galleria';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

import {ImageModule} from 'primeng/image';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GalleriaModule,
    CarouselModule,
    ButtonModule,
    ImageModule
  ]
})
export class HomeModule { }
