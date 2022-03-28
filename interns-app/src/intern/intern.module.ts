import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InternComponent } from './intern/intern.component';
import { EditInternComponent } from './edit-intern/edit-intern.component';
import { AddInternComponent } from './add-intern/add-intern.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from  '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { DateAdapter, MatOptionModule } from '@angular/material/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    AddInternComponent,
    HomeComponent,
    InternComponent,
    EditInternComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  exports:[
    AddInternComponent,
    HomeComponent,
    InternComponent,
    EditInternComponent
  ]
})
export class InternModule { }
