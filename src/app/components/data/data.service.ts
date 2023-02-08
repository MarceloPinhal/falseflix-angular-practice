import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class DataService {
  public apiKey: string = "9e1a6092aeed4004e1fc15692ac1dcff"
  public url : string = "https://api.themoviedb.org/3";
  constructor(private http : HttpClient) { }
  
  getTopRatedMovies ():Observable<any> {
    return this.http.get(this.url+"/movie/top_rated?api_key="+this.apiKey)
  }

  getUpcomingMovies ():Observable<any>  {
    return this.http.get(this.url+"/movie/upcoming?api_key="+this.apiKey+"&language=en-US")
  }

  getActiongMovies () {
    return this.http.get(this.url+"action/movie/list?api_key="+this.apiKey+"&language=en-US")
  }

  getHorrorMovies () {
    return this.http.get(this.url+"horror/movie/list?api_key="+this.apiKey+"&language=en-US")
}

}

