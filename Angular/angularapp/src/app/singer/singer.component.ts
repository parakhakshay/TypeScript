import { Component, OnInit } from '@angular/core';
import { singer } from '../models/singer';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
  title:string="Top 3-Fav_Songs"
  // array of object
  singers:singer[]=[
    {Name:"SongLab",Song:"Hero",releaseDate:"2021",Country:"US" },
    {Name:"For King and Country",Song:"God only Knows",releaseDate:"2018",Country:"US" },
    {Name:"HillSong",Song:"Amazing Grace",releaseDate:"2014",Country:"US" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
