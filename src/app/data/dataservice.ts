import { Injectable, Inject, InjectionToken } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

import {RowCells} from "../model/rowcells.model";
import {Cell} from "../model/cell.model";
import contentnumbers from "../model/contentnumbers.model";

export interface IDataServiceTest{
    test?:boolean;
}

// export const TEST = new InjectionToken('Test.Value');
export const TEST = new InjectionToken('false');



@Injectable()
export class DataService {
    private index:number;
    private lengthrows = 97; // <1000
    private _test:Boolean;

    // constructor overloading

    constructor()
    constructor( test: string)
    constructor( @Inject(TEST) test?: string) {
        if(test && test=='true'){
            console.log('dataservice test: '+ test);
            this._test = true;
            console.log('dataservice test: '+ this._test);
        }else{
            this._test= false;
        }
        if(!this._test){
            this.index = 0;
            let newRow = new RowCells(this.index);
            
            for(var i=0; i<this.lengthrows; i++){
                let newcell = new Cell(1000*this.index+i);
                newRow.Cells.push(newcell);
            }
        }
        else{
            this.index = 0;
            let newRow = new RowCells(this.index);
            
            for(var i=0; i<this.lengthrows; i++){
                let newcell = new Cell(1000*this.index+i);
                newRow.Cells.push(newcell);
            }
        }
    }


    
    
    constructor1(test?: IDataServiceTest){
        if(test && test.test){
            this._test = test.test;
        }
        else{
            this._test= false;
        }
        
        if(!this._test){
            this.index = 0;
            let newRow = new RowCells(this.index);
            
            for(var i=0; i<this.lengthrows; i++){
                let newcell = new Cell(1000*this.index+i);
                newRow.Cells.push(newcell);
            }
        }
        else{
            this.index = 0;
            let newRow = new RowCells(this.index);
            
            for(var i=0; i<this.lengthrows; i++){
                let newcell = new Cell(1000*this.index+i);
                newRow.Cells.push(newcell);
            }
        }
        
    }

    getNewRowCells():RowCells{
        this.index++;
        let newRow = new RowCells(this.index);
        //console.log('getNewRowCells with _test: '+this._test);
        if(!this._test){
            for(var i=0; i<this.lengthrows; i++){
                let rand = Math.floor(Math.random() * contentnumbers.length);
                let newcell = new Cell(1000*this.index+rand);
                newRow.Cells.push(newcell);
            }
        }
        else{
            for(var i=0; i<this.lengthrows; i++){
                let newcell = new Cell(1000*this.index+i);
                newRow.Cells.push(newcell);
            }
        }
        
        
        return newRow;
    }

    getIndex():number{
        return this.index;
    }
    
}
