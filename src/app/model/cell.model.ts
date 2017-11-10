import contentnumbers from './contentnumbers.model';

export class Cell {
    private _id:number;
    
    constructor(id:number) // 213 : 
    {
        if(id<0){
            id=-1*id;
        }
        this._id = Math.trunc(id);
    }

    get Id():number{
        return this._id;
    }

    get Content():string{
        var lastTwoNumbers = this.Id % 1000;
        var index = lastTwoNumbers % contentnumbers.length;
       return contentnumbers[index];
    }
}