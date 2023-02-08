import { IMovieAPI, Imovie } from './../../models/imovie';
import { DataService } from './../data/data.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroine',
  templateUrl: './heroine.component.html',
  styleUrls: ['./heroine.component.css']
})
export class HeroineComponent implements OnInit {
  public topRatedMovies? : Imovie[] = [] 


  constructor (private dataService: DataService){}
  
  ngOnInit() {
    
    this.dataService.getTopRatedMovies().subscribe( (data: IMovieAPI) => {
     const results :Imovie[] = data.results.map( (movie)=>{
       return movie
      })
      this.topRatedMovies = results.slice(1,2)
      // [Math.floor(Math.random()*this.topRatedMovies.length)]
  })
    }
    }




