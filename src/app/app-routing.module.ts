import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { authGuard, authGuardChild } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'users',
    canActivate: [authGuard],
    canActivateChild: [authGuardChild],
    component: UsersComponent,
    children: [{ path: ':id', component: UserComponent }],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
