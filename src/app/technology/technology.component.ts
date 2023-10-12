import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../service/newapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  Technology:any=""
  constructor(private serve: NewapiService){
    console.log("constructor of class")
  }
  ngOnInit(): void {
      console.log("ngOnInit")
      this.getDetails()
  }
  getDetails(){
    this.serve.Tech().subscribe((technews)=>{
      this.Technology=technews.articles
      console.log(this.Technology.articles)
    })

  }
}
