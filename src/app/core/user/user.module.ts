import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './pages';
import { UserListComponent, UserCreateComponent, UserDetailComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserHomeComponent, UserListComponent, UserCreateComponent, UserDetailComponent]
})
export class UserModule { }