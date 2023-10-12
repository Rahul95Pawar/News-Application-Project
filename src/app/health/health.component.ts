import { Component } from '@angular/core';
import { NewapiService } from '../service/newapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  Health:any=""
  constructor(private serve: NewapiService){
    console.log("constructor of class")
  }
  ngOnInit(): void {
      console.log("ngOnInit")
      this.getDetails()
  }
  getDetails(){
    this.serve.hea().subscribe((heanews)=>{
      this.Health=heanews.articles
      console.log(this.Health.articles)
    })

  }
}
