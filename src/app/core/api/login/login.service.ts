import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, switchMap } from "rxjs";
import { LoginRequest, LoginResponse, User } from "@core/api";
import { Response, ResultMessageTypes } from "../api.model";

@Injectable()
export class LoginService {

    private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
    user$ = this.userSubject.asObservable();

    constructor() { }

    login(request: LoginRequest): Observable<Response<LoginResponse>> {
        return of(null).pipe(
            switchMap(() => {
                if (request.username === 'admin' && request.password === 'admin') {
                    const loginApiResponse: Response<LoginResponse> = this.getSuccessLoginResponse();

                    if (loginApiResponse.success) {

                        localStorage.setItem('token', loginApiResponse.data.token);
                        localStorage.setItem('user', JSON.stringify(loginApiResponse.data.user));
                        this.userSubject.next(loginApiResponse.data.user);
                    }

                    else {
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        this.userSubject.next({} as User);
                        return of(this.getErrorLoginResponse());
                    }

                    return of(loginApiResponse);
                } else {
                    return of(this.getErrorLoginResponse());
                }
            })
        )
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.userSubject.next({} as User);
    }

    static isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    getUser() {
        return this.user$;
    }

    private getSuccessLoginResponse(): Response<LoginResponse> {
        return {
            success: true,
            errorCode: '',
            message: '',
            url: '',
            resultMessage: {
                code: '',
                message: 'Login successful',
                resultMessageId: '',
                resultMessageTypeId: '1' as ResultMessageTypes,
            },
            data: {
                token: 'token',
                user: {
                    id: 1,
                    username: 'admin',
                    email: 'admin@moneytolia.com',
                    roles: ['ADMIN']
                }
            } as LoginResponse
        };
    }

    private getErrorLoginResponse(): Response<LoginResponse> {
        return {
            success: false,
            errorCode: '',
            message: '',
            url: '',
            resultMessage: {
                code: '',
                message: 'Login failed',
                resultMessageId: '',
                resultMessageTypeId: '2' as ResultMessageTypes,
            },
            data: {
            } as LoginResponse
        };
    }
}