import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.page.html',
  styleUrls: ['./student-create.page.scss'],
})
export class StudentCreatePage implements OnInit {

  public data: Student;

  constructor(public api: ApiService, public router: Router) { 
    this.data = new Student();
  }

  ngOnInit() {
  }

  submitForm(){
    alert(this.data.age);
    this.api.createItem(this.data).subscribe((response) =>{
      this.router.navigate(['student-list']);
    });
  }

}
