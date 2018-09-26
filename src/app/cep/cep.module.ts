import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { CepComponent } from './cep.component';
import { CepSearchComponent } from './cep-search';
import { CepListComponent } from './cep-list';

import { SharedModule } from '../shared/shared.module';

import { MomentModule } from 'ngx-moment';

import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MomentModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    CepComponent,
    CepSearchComponent,
    CepListComponent
  ]
})
export class CepModule { }
