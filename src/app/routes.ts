import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { RegisterComponent } from './users/register.component';
import { SignInComponent } from './users/sign-in.component';

export const appRoutes : Routes = [
  { path: 'catalog', component: CatalogComponent, },
  { path: 'users', loadChildren: 'app/users/user.module#UserModule' }
];
