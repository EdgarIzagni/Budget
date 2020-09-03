import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Data } from '../../data.service'
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('mnt') mnt:ElementRef;
  @ViewChild('desc') desc:ElementRef;
  @ViewChild('value') op:ElementRef;

  constructor(private data:Data) { }
  ngOnInit(): void {}

  
  onAgregar(){
      let text = new RegExp('([ ]*[a-z]+){1,}','g');
      let number =  new RegExp('[ ]*[1-9]+[.]*[,]*[1-9]+')

      if(text.test(this.desc.nativeElement.value) && number.test(this.mnt.nativeElement.value)) {
  		  if(this.op.nativeElement.value == "i"){
  			  this.data.addIcome(parseFloat(this.mnt.nativeElement.value),this.desc.nativeElement.value)
  		  }else {
  			  this.data.addExpense(parseFloat(this.mnt.nativeElement.value),this.desc.nativeElement.value)
  		  } 
      }else {
        alert("Datos incorectos")
      }

      this.mnt.nativeElement.value = ""
      this.desc.nativeElement.value = ""
  }
}