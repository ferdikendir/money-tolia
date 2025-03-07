import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "@core/api";

export const guestGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    if (!LoginService.isLoggedIn()) {
        return true;
    } else {
        const router = inject(Router);
        router.navigate(['/']);
        return false;
    }
};