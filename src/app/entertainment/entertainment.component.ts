import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../service/newapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainment:any=""
  constructor(private serve: NewapiService){
    console.log("constructor of class")
  }
  ngOnInit(): void {
      console.log("ngOnInit")
      this.getDetails()
  }
  getDetails(){
    this.serve.ent().subscribe((entnews)=>{
      this.entertainment=entnews.articles
      console.log(this.entertainment.articles)
    })

  }
}
