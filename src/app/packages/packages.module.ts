import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages/packages.component';
import {TooltipModule} from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    PackagesComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    TooltipModule,
    ButtonModule
  ]
})
export class PackagesModule { }
