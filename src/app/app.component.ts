import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



notes=[];
  finalData: string;

ngOnInit() {
  // this.onload();
  this.notes=JSON.parse(localStorage.getItem('details'));


}






}

