import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';


@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  title: string="Top 3-Indian Movies";
  // array of object
  movies: Movie[]=[
    {titles:'3Idiots', director:"rajkumar", cast:'Amir Khan',releaseDate:"2009"},
    {titles:'KGF', director:"Prasnth neel", cast:'Yash',releaseDate:"2020"},
    {titles:'Tanhaji', director:"Raut", cast:'Ajay Devgan',releaseDate:"2020"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
