import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit ,AfterViewInit {

  constructor(private router: Router){}
 
  title = 'bikayi';
  @ViewChild ('content',{static: false}) player:ElementRef
  @ViewChild ('content1',{static: false}) category:ElementRef


notes=[];
  finalData: string;

ngOnInit() {
  this.onload();

  this.notes=JSON.parse(localStorage.getItem('details'));


}

ngAfterViewInit(){


}

onload(){
  var person = prompt("Please enter your password");
  if (person != null && person === "QWERTY") {
    this.router.navigate(['/'])
  }
  else{
    this.router.navigate(['/error'])
  }
}

submitted(event){
  if(this.player.nativeElement.value != false && this.category.nativeElement.value !=false){

this.notes.push(
  {category:this.category.nativeElement.value,
   data:this.player.nativeElement.value
  });

   this.finalData=JSON.stringify(this.notes);
  localStorage.setItem('details',this.finalData);

this.player.nativeElement.value='';
this.category.nativeElement.value=''
  }
  else{
    alert("Please fill Category and notes")
    console.log(this.player.nativeElement.value == '',this.category.nativeElement.value ==''  )
  }


}

delete(i){
  
  this.notes.splice(i,1);
  this.finalData=JSON.stringify(this.notes);
  localStorage.setItem('details',this.finalData);
}

}
