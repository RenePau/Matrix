import { Component, OnInit, Input } from '@angular/core';
import {Cell} from '../model/cell.model';


@Component({
  selector: 'cell',
  templateUrl: 'cell.component.html'
})
export class CellComponent implements OnInit {

    public content:string;
    @Input('celldata')
    celldata: Cell;
  
    constructor() {
        
    }
  

    public ngOnInit(){
        this.content = this.celldata.Content;
        //this.content = 'A';
    }


}
