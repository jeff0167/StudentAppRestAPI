import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  studentsData: any;

  constructor(public api: ApiService) {
    this.studentsData = [];
   }

  ngOnInit() {
    //this.getAllStudents();
  }

  ionViewWillEnter(){
    this.getAllStudents();
  }
  
  getAllStudents(){
    this.api.getList().subscribe(respone =>{
      this.studentsData = respone;
    });
  }
  
  delete(student: Student) {
    this.api.deleteItem(student.id).subscribe(respone => {
      this.getAllStudents();
    });
  }

}
