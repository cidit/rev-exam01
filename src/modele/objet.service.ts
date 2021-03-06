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

    //methode GET (read)
    get(): Observable<Exercice>{
        return this.http.get<Exercice>(this.baseUrl +'/Exercice')
        .pipe(
            retry(1), catchError(this.errorHandl)
        )
    }

    // methode PUT (create)
    put(body: Exercice): Observable<Exercice>{
        return this.http.put<Exercice>(this.baseUrl +'/Exercice', body)
        .pipe(
            retry(1), catchError(this.errorHandl)
        )
    }

    // methode POST (modify)
    post(id: number, body: Exercice): Observable<Exercice>{
        return this.http.post<Exercice>(this.baseUrl +'/Exercice/' + id, body)
        .pipe(
            retry(1), catchError(this.errorHandl)
        )
    }

    // methode DELETE (remove)
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