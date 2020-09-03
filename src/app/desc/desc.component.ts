import { Component, OnInit } from '@angular/core';
import { Data } from '../../data.service';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {
  
  constructor(private data:Data) { }

  ngOnInit(): void {
  }

  icomes = this.data.getIcomes()
  expenses = this.data.getExpenses() 

  onDeleteIcome(icome){
  	let i:number = this.icomes.indexOf(icome)
  	this.data.deleteIcome(i)
  }
  onDeleteExpense(expense){
  	let i:number = this.expenses.indexOf(expense)
  	this.data.deleteExpense(i)
  }

}
