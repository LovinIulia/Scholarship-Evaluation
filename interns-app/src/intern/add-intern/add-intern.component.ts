import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Intern } from '../interfaces/intern';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-add-intern',
  templateUrl: './add-intern.component.html',
  styleUrls: ['./add-intern.component.scss']
})
export class AddInternComponent implements OnInit {
  name: string;
  age: number;
  dateOfBirth: string;

    range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private internService: InternService) { }

  ngOnInit(): void {
  }

  addIntern() {
     
    let guid = Guid.create();
    const intern: Intern = {
     id: guid.toString(),
     name: this.name,
     age: this.age,
     dateOfBirth: this.dateOfBirth
   }

    this.internService.addIntern(intern).subscribe(a => this.internService.getInterns());
  }

}
