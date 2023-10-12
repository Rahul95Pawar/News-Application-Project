import { Component } from '@angular/core';
import { NewapiService } from '../service/newapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  Sports:any=""
  constructor(private serve: NewapiService){
    console.log("constructor of class")
  }
  ngOnInit(): void {
      console.log("ngOnInit")
      this.getDetails()
  }
  getDetails(){
    this.serve.Spo().subscribe((Sponews)=>{
      this.Sports=Sponews.articles
      console.log(this.Sports.articles)
    })

  }
}
