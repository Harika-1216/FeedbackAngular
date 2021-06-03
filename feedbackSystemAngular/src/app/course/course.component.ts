import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../classes/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  [x: string]: any;

  @Input() courseId: any;
  courseName: any;
  courseDescription: any;
  noOfDays: any;
  //constructor(private courseService:CourseService) { }
  constructor(
    private courseService: CourseService
    ) { }
  
    //To view all courses
  ngOnInit(): void {

    this.courseService.getCourseList().subscribe(
      data => 
        console.log(data));
    }
    //To add a course
    addCourse(){
      
      let course=
      {
        courseId:this.courseId,
        courseName:this.courseName,
        courseDescription:this.courseDescription,
        noOfDays:this.noOfDays
      }
      this.courseService.addCourse(Course).subscribe(
       data => 
        console.log(data));
    }


    //To update a course
    updateCourse(){
      
      let course=
      {
        courseId:this.courseId,
        courseName:this.courseName,
        courseDescription:this.courseDescription,
        noOfDays:this.noOfDays
      }
      this.courseService.updateCourse(Course).subscribe(
       data => 
        console.log(data));
    }




//To delete a course
    deleteCourse(){
      
      let course=
      {
        courseId:this.courseId,
        courseName:this.courseName,
        courseDescription:this.courseDescription,
        noOfDays:this.noOfDays
      }
      this.courseService.deleteCourse(Course).subscribe(
       data => 
        console.log(data));
    }



    //To view a course
    viewCourse(){
      
      let course=
      {
        courseId:this.courseId,
        courseName:this.courseName,
        courseDescription:this.courseDescription,
        noOfDays:this.noOfDays
      }
      this.courseService.viewCourse(Course).subscribe(
       data => 
        console.log(data));
    }
  }

