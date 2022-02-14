import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persons } from './person.datasource';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPerson(): Observable<Person[]> {
    return of(Persons);
  }


}
