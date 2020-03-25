import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'core',
    loadChildren: () => import('src/app/core/core.module').then(mod => mod.CoreModule),
  },
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
