import { Icomes } from '../src/icome.model'
import { Expenses } from '../src/expenses.model'

export class Data {
	private icomes:Icomes[] = [];
	private expenses:Expenses[] = [];
	
	constructor() {}

	addIcome(mnt:number,desc:string):void{
		this.icomes.push(new Icomes(mnt,desc));
	}

	deleteIcome(index:number):void{
		this.icomes.splice(index,1);
	}

	addExpense(mnt:number,desc:string):void{
		this.expenses.push(new Expenses(mnt,desc));
	}

	deleteExpense(index:number) {
		this.expenses.splice(index,1);
	}
	
	getIcomes():Icomes[]{
		return this.icomes;
	}

	getExpenses():Expenses[]{
		return this.expenses;
	}

}