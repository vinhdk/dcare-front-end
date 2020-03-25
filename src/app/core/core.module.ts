import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutes } from './core.routing';
import { LayoutComponent } from './layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,
    CoreRoutes,
    NzLayoutModule,
    NzBreadCrumbModule,
  ],
  declarations: [LayoutComponent]
})
export class CoreModule { }