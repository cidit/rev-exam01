import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class ExerciceObject{

    baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    //formatage http Headers
    httpOpions = {
        headers : new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    //methode GET
    get(): Observable<Exercice>{
        return this.http.get<Exercice>(this.baseUrl +'/Exercice')
        .pipe(
            retry(1), catchError(this.errorHandl)
        )
    }

    //
    put(body: Exercice): Observable<Exercice>{
        return this.http.put<Exercice>(this.baseUrl +'/Exercice', body)
        .pipe(
            retry(1), catchError(this.errorHandl)
        )
    }

    post(body: Exercice): Observable<Exercice>{
        return this.http.post<Exercice>(this.baseUrl +'/Exercice', body)
        .pipe(
            retry(1), catchError(this.errorHandl)
        )
    }

    delete(id: number): Observable<Exercice>{
        return this.http.delete<Exercice>(this.baseUrl +'/Exercice/' + id)
        .pipe(
            retry(1), catchError(this.errorHandl)
        )
    }

    errorHandl(error){
        let errorMessage = '';
        if(error.error instanceof ErrorEvent){
            errorMessage = error.error.message;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}