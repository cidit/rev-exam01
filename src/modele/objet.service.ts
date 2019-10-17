import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class ExerciseObject {

    baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    //formatage http Headers
    httpOpions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    //methode GET
    GetStudent(): Observable<Exercice> {
        return this.http.get<Exercice>(this.baseUrl + '/Exercise')
            .pipe(
                retry(1), catchError(this.errorHandl)
            )
    }

    //methode PUT
    PutStudent(): Observable<Exercice> {
        return this.http.put<Exercice>(this.baseUrl + '/Exercise', '')
            .pipe(
                retry(1), catchError(this.errorHandl)
            )
    }
    //methode POST
    PostStudent(): Observable<Exercice> {
        return this.http.post<Exercice>(this.baseUrl + '/Exercise', '')
            .pipe(
                retry(1), catchError(this.errorHandl)
            )
    }
    //methode DELETE
    DeleteStudent(): Observable<Exercice> {
        return this.http.delete<Exercice>(this.baseUrl + '/Exercise')
            .pipe(
                retry(1), catchError(this.errorHandl)
            )
    }

    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}