import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ActionUserComponent } from './components/users/action-user/action-user.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'add', component: ActionUserComponent },
  { path: 'edit/:id', component: ActionUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
