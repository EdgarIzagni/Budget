export class Expenses  {
	private mnt:number
	private desc:string
	
	constructor(mnt:number, desc:string) {
		this.mnt = mnt
		this.desc = desc
	}

	getMnt():number{
		return this.mnt
	}

	getDesc():string{
		return this.desc
	}
}