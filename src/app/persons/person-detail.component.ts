import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPerson } from './person';
import { PersonService } from './person.service';

//
import { FormsModule } from '@angular/forms';
//

@Component({
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  pageTitle: string = 'Данные сотрудника';
  errorMessage: string;
  person: IPerson;

  //
  newCongrat: string;
  congrats: any;
  congratObj: any;
  //

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _personService: PersonService) {

    //
    this.newCongrat = '';
    this.congrats = [];
    //
  }

  //
  addCongratulation(event) {
    this.congratObj = {
      newCongrat: this.newCongrat,
      completed: false
    };
    this.congrats.push(this.congratObj);
    this.newCongrat = '';
    event.preventDefault();
  }
  removeCongrat(index) {
      this.congrats.splice(index, 1);
    }
  //

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.getPerson(id);
  }

  getPerson(id: number) {
    this._personService.getPerson(id).subscribe(
      person => this.person = person,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/persons']);
  }

}
