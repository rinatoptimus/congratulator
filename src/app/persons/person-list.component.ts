import { Component, OnInit } from '@angular/core';

import { IPerson } from './person';
import { PersonService } from './person.service';

//
// import {InlineEditorDirectives} from 'ng2-inline-editor';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

    pageTitle: string = 'Список именинников';
    imageWidth: number = 100;
    imageMargin: number = 2;
    borderRadius: string = '50%';
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;

    //
    newPerson: string;
    newPersonObj: any;
    //
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredPersons = this.listFilter ? this.performFilter(this.listFilter) : this.persons;
    }

    filteredPersons: IPerson[];
    persons: IPerson[] = [];

    constructor(private _personService: PersonService) {
        //
        this.newPerson = '';
        this.filteredPersons = [];
        //
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Список именинников: ' + message;
    }

    performFilter(filterBy: string): IPerson[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.persons.filter((person: IPerson) =>
        person.personName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._personService.getPersons()
                .subscribe(persons => {
                    this.persons = persons;
                    this.filteredPersons = this.persons;
                },
                    error => this.errorMessage = <any>error);
    }

    saveEditable(value) {
        // call to http service
        console.log('http.service: ' + value);
    }

    removePerson(index) {
        this.filteredPersons.splice(index, 1);
    }

    addPerson(event) {
        this.newPersonObj = {
          newPerson: this.newPerson,
          completed: false
        };
        this.filteredPersons.push(this.newPersonObj);
        this.newPerson = '';
        event.preventDefault();
    }


}
