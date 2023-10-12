import { Component } from '@angular/core';
import { NewapiService } from '../service/newapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  Science:any=""
  constructor(private serve: NewapiService){
    console.log("constructor of class")
  }
  ngOnInit(): void {
      console.log("ngOnInit")
      this.getDetails()
  }
  getDetails(){
    this.serve.Sci().subscribe((Scinews)=>{
      this.Science=Scinews.articles
      console.log(this.Science.articles)
    })

  }
}
