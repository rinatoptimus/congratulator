import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PersonDetailComponent } from './person-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { PersonGuardService } from './person-guard.service';
import { PersonService } from './person.service';
import { SharedModule } from './../shared/shared.module';

import {InlineEditorModule} from 'ng2-inline-editor';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

//
import {FormsModule} from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor';
//

@NgModule({
  imports: [
    InlineEditorModule,
    Angular2FontawesomeModule,
    //
    CKEditorModule,
    //
    RouterModule.forChild([
        { path: 'persons', component: PersonListComponent },
        { path: 'persons/:id',
          canActivate: [ PersonGuardService ],
          component: PersonDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    PersonListComponent,
    PersonDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    PersonService,
    PersonGuardService
  ]
})
export class PersonModule { }
