import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "@core/api";

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    if (LoginService.isLoggedIn()) {
        return true;
    } else {
        const router = inject(Router);
        router.navigate(['/login']);
        return false;
    }

};