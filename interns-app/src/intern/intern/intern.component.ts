import { Component, OnInit } from '@angular/core';
import { Intern } from '../interfaces/intern';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'dateOfBirth'];
  dataSource = "";
  interns: Intern[] = [];

  constructor(private service: InternService) { }

  ngOnInit(): void {
    this.service.getInterns().subscribe((interns: Intern[]) => {this.interns = interns} );
    console.log('intenrs:' + this.interns.length)
  }

}
