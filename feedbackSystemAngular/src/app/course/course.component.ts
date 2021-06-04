import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Icourse } from './courselist';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  addform = new FormGroup({
    courseId : new FormControl(''),
    courseName : new FormControl(''),
    courseDescription : new FormControl(''),
    noOfDays : new FormControl('')
  });

  editform = new FormGroup({
    courseId : new FormControl(''),
    courseName : new FormControl(''),
    courseDescription : new FormControl(''),
    noOfDays : new FormControl('')
  });

  public courses: Icourse[]=[];
  public editCourse : Icourse[] = [] ;
  //constructor(private courseService:CourseService) { }
  constructor(private http : HttpClient,private courseService: CourseService) { }
  
    //To view all courses
  ngOnInit(): void {
    this.getCourseList();
  }

  public getCourseList()
  {
    this.courseService.getCourseList().subscribe(
      data => this.courses=data);
      //console.log(this.courses);
      
    }

    public Edit(courses : any)
    { 
      this.editCourse = courses;
      console.log(this.editCourse);
      
    }
    //To add a course
    public add(){
      this.courseService.addCourse(this.addform.value).subscribe(data => console.log(''));
    }


    //To update a course
    public update(){
      this.courseService.updateCourse(this.editform.value).subscribe(data => console.log(''));
    }




//To delete a course
    public deleteCourse(){
      var arr:any = [];
    arr = Object.values(this.editCourse);
    this.courseService.deleteCourse(arr[0]).subscribe(Response => console.log(''));

    }



    //To view a course
    view(){
      this.courseService.viewCourse(this.courses).subscribe(
       data => 
        console.log(data));
    }
    public searchCourses(key: string): void {
      console.log(key);
      const results: Icourse[] = [];
      for (const course of this.courses) {
        if (course.courseName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || course.courseDescription.toLowerCase().indexOf(key.toLowerCase()) !== -1){
          results.push(course);
        }
      }
      this.courses = results;
      if (results.length === 0 || !key) {
        this.getCourseList();
      }
    }
  }

