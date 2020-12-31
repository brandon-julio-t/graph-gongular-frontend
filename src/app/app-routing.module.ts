import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { StorageComponent } from './components/storage/storage.component';
import { FriendsSearchComponent } from './components/friends-search/friends-search.component';
import { FriendsViewComponent } from './components/friends-view/friends-view.component';
import { AccountViewComponent } from './components/account-view/account-view.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'storage',
        component: StorageComponent,
      },
      {
        path: 'account',
        component: AccountViewComponent,
      },
      {
        path: 'account/update',
        component: AccountUpdateComponent,
      },
      {
        path: 'friends',
        component: FriendsViewComponent,
      },
      {
        path: 'friends/search',
        component: FriendsSearchComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
