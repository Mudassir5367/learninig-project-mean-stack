import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from './localStorage-service/local-storage.service';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state) => {


const storageService = inject(LocalStorageService);
const router = inject(Router)
const isLoggedIn = !!storageService.getItem('userId');
if (isLoggedIn && (route.routeConfig?.path === 'login' || route.routeConfig?.path === 'signup')) {
  router.navigate(['/']);
  return false;
}
if (!isLoggedIn && route.routeConfig?.path !== 'login' && route.routeConfig?.path !== 'signup') {
  router.navigate(['/login']);
  return false;
}
return true;
};