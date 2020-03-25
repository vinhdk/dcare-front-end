import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutes } from './core.routing';
import { LayoutComponent } from './layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
@NgModule({
  imports: [
    CommonModule,
    CoreRoutes,
    NzLayoutModule
  ],
  declarations: [LayoutComponent]
})
export class CoreModule { }