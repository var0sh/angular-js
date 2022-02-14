import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
        private authService: AuthService,
        private router: Router
        ) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.isAuthenticated()
            .then((authenticated: Boolean | any) => {
                if (authenticated) {
                    return true;
                }else {
                    this.authService.redirectUrl = state.url;
                    this.router.navigate(['/login']);
                    return false;
                }
            })
    }
}