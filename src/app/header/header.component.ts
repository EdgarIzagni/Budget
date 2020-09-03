import { Component, OnInit } from '@angular/core';
import { Data } from '../../data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(private data:Data ){}
  
  icomes = this.data.getIcomes();
  expenses = this.data.getExpenses();

  icomeTotal():number {
  	let suma:number = 0
  	for(let icome of this.icomes){
  		suma = suma + (icome.getMnt()) 
  	}
  	return suma
  }

  expensesTotal():number {
  	let suma:number = 0
  	for(let expense of this.expenses){
  		suma = suma + (expense.getMnt())
  	}

  	return suma
  }


  porcentaje():number {
  	if( this.expensesTotal() == 0 || this.icomeTotal() == 0 ){
  		return 0
  	}else{
  		return (this.expensesTotal()/this.icomeTotal())
  	}
  }
}
