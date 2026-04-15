import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('../features/homepage/homepage').then((m) => m.Homepage)},
  {path: 'about', loadComponent: () => import('../features/about/about').then((m) => m.About)},
  {path: 'services', loadComponent: () => import('../features/services/services').then((m)=> m.Services)},
  {path: 'orders', loadComponent: () => import('../features/orders/orders').then((m) => m.Orders)},
  {path: 'customers', loadComponent: () => import('../features/customers/customers').then((m) => m.Customers)},
];
