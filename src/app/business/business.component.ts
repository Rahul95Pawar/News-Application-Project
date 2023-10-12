import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../service/newapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business:any=""
  constructor(private serve: NewapiService){
    console.log("constructor of class")
  }
  ngOnInit(): void {
      console.log("ngOnInit")
      this.getDetails()
  }
  getDetails(){
    this.serve.getData().subscribe((businessnews)=>{
      this.business=businessnews.articles
      console.log(this.business.articles)
    })

  }
}
// export class BusinessComponent implements OnInit {
//   constructor(private newapi: NewapiService) { }
//   business: any = [];
//   ngOnInit(): void {
//     this.newapi.getData().subscribe((businessnews) => {
//       console.log(businessnews.articles);
//     this.business = businessnews.articles;
//     })
//   }
// }
