import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IPerson } from './person';

@Injectable()
export class PersonService {
    private _personUrl = './api/persons/persons.json';

    constructor(private _http: HttpClient) { }

    getPersons(): Observable<IPerson[]> {
        return this._http.get<IPerson[]>(this._personUrl)
            .do(data => console.log('Все: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPerson(id: number): Observable<IPerson> {
        return this.getPersons()
            .map((persons: IPerson[]) => persons.find(p => p.personId === id));
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
