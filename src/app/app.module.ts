import { DataService } from './components/data/data.service';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroineComponent } from './components/heroine/heroine.component';
import { MoviesComponent } from './components/movies/movies.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroineComponent,
    MoviesComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
