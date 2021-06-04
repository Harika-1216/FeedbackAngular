import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Icourse } from '../course/courselist';

@Injectable({
    providedIn: 'root'
})
export class CourseService{

    private baseUrl:string ="http://localhost:8080/Fms/api/CourseViewA"

    constructor(private httpClient:HttpClient) { }

    public getCourseList():Observable<Icourse[]>{
        return this.httpClient.get<Icourse[]>(`${this.baseUrl}`);
    }

    public addCourse(course: any){
        return this.httpClient.post("http://localhost:8080/Fms/api/Course",
        course,{responseType:'text' as 'json'});
      }
    
      public updateCourse(course: any){
        return this.httpClient.put("http://localhost:8080/Fms/api/CourseUp",
        course,{responseType:'text' as 'json'});
      }
      public deleteCourse(course: any){
        return this.httpClient.delete("http://localhost:8080/Fms/api/CourseRem");
      }

      public viewCourse(course: any){
        return this.httpClient.post("http://localhost:8080/Fms/api/CourseView",
        course,{responseType:'text' as 'json'});
      }


    
          


}