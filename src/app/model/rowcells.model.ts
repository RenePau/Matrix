import {Cell} from './cell.model';

export class RowCells{
    public Cells: Array<Cell>;
    public Row:number;

    constructor(row:number){
        this.Row = row;
        this.Cells = new Array<Cell>();
    }

}