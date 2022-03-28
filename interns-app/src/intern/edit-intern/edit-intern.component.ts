import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Intern } from '../interfaces/intern';
import { InternService } from '../services/intern.service';

@Component({
  selector: 'app-edit-intern',
  templateUrl: './edit-intern.component.html',
  styleUrls: ['./edit-intern.component.scss']
})
export class EditInternComponent implements OnInit {
  internToEdit: Intern;

  constructor(private internService: InternService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  editIntern() {
    this.internService.editIntern(this.internToEdit).subscribe();
  }

}
