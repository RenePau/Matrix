import {RowCells} from './rowcells.model';

export class Matrix{
    public RowCells: Array<RowCells>;
    public Count:number;

    constructor(rowsshow:number){
        this.Count = 0;
        this.RowCells = new Array<RowCells>();
    }

    addNewRowCell(newrowcell:RowCells):void{
        this.RowCells.push(newrowcell);
        
        var sortedArray: Array<RowCells> = this.RowCells.sort((obj1, obj2) => {
            if (obj1.Row > obj2.Row) {
                return -1;
            }
        
            if (obj1.Row < obj2.Row) {
                return 1;
            }
        
            return 0;
        });

        this.RowCells = sortedArray.slice(0, 30);
    }

}