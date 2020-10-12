import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }
   userName : any

  ngOnInit(): void {
    this.dataService.getData().subscribe(data =>{
      this.userName=data
    })
  }

}
