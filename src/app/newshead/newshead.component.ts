import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../service/newapi.service';

@Component({
  selector: 'app-newshead',
  templateUrl: './newshead.component.html',
  styleUrls: ['./newshead.component.css']
})
export class NewsheadComponent implements OnInit {
  newshead:any=""

nd: any;
  constructor(private serve: NewapiService){
    console.log("constructor of class")
  }
  ngOnInit(): void {
      console.log("ngOnInit")
      this.getDetails()
  }
  getDetails(){
    this.serve.tcHeadline().subscribe((headnews)=>{
      this.newshead=headnews.articles
      console.log(this.newshead.articles)
    })

  }
  

}
