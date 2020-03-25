import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceHomeComponent } from './pages';
import { ServiceListComponent, ServiceCreateComponent, ServiceDetailComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServiceHomeComponent, ServiceListComponent, ServiceCreateComponent, ServiceDetailComponent]
})
export class ServiceModule { }