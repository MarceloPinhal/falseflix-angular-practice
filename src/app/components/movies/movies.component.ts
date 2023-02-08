import { DataService } from './../data/data.service';
import { Imovie, IMovieAPI } from './../../models/imovie';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public topRatedMovies? : Imovie[] = [] 
  public upcomingMovies? : Imovie[] = [] 

  
  constructor (private dataService: DataService){}
  
  ngOnInit() {
    
    this.dataService.getTopRatedMovies().subscribe( (data: IMovieAPI) => {
      const results :Imovie[] = data.results.map( (movie)=>{
        return movie
      })
      this.topRatedMovies = results   
    })

    this.dataService. getUpcomingMovies().subscribe( (data: IMovieAPI) => {
      const results :Imovie[] = data.results.map( (movie)=>{
        return movie
      })
      this.upcomingMovies = results  
    })


  }
  
  slideRight (event:any) {
 event.parentNode.parentNode.scrollLeft += 500
  }

  slideLeft (event:any) {
    event.parentNode.parentNode.scrollLeft -= 500
     }
}