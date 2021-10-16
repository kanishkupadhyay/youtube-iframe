import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  apiURL = 'https://youtube-database-angular.herokuapp.com/all-videos';

  getAllVideos() {
    return this.http.get(this.apiURL)
  }

}
