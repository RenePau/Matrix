
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { MatrixComponent } from '../views/matrix.component';
import {DataService} from './dataservice';
import {RowCells} from '../model/rowcells.model';

import {AppComponent} from '../app.component';
import {MatrixModule} from '../views/matrix.module';



describe('DataService Injector', () => {
    let service: DataService;

      service = new DataService('true');

      it('dataservice getIndex', () => expect(service.getIndex() ).toBe(0));
      it('dataservice getNewRowCells()', () => expect(service.getNewRowCells().Row ).toBe(1));
      it('dataservice getIndex1', () => expect(service.getIndex() ).toBe(1));
      it('dataservice getNewRowCells()', () => expect(service.getNewRowCells().Row ).toBe(2));
      it('dataservice getIndex2', () => expect(service.getIndex() ).toBe(2));
      it('dataservice getNewRowCellsLength()', () => expect(service.getNewRowCells().Cells.length ).toBe(97));
      it('dataservice getIndex3', () => expect(service.getIndex() ).toBe(3));
      it('dataservice getNewRowCells().Cells[0].Id', () => expect(service.getNewRowCells().Cells[0].Id ).toBe(4000));

      // NOT ALLOWED: all variables before it functions
      //let fourthRow = service.getNewRowCells();
      //it('dataservice getNewRowCells()', () => expect(fourthRow.Row ).toBe(3)); 
  });

  describe('DataService Injector CellContent', () => {
    let service = new DataService('true');
    let newRow = service.getNewRowCells();

    it('dataservice getIndex', () => expect(newRow.Row ).toBe(1));
    it('dataservice getNewRowCells[0]', () => expect(newRow.Cells[0].Id ).toBe(1000));
    it('dataservice getNewRowCells[0]Content', () => expect(service.getNewRowCells().Cells[0].Content ).toBe('0'));
    it('dataservice getNewRowCells[10]Content', () => expect(service.getNewRowCells().Cells[10].Content ).toBe('A'));
    it('dataservice getNewRowCells[16]Content', () => expect(service.getNewRowCells().Cells[16].Content ).toBe(''));
    it('dataservice getNewRowCells[17]Content', () => expect(service.getNewRowCells().Cells[17].Content ).toBe('0'));
    it('dataservice getNewRowCells[29]Content', () => expect(service.getNewRowCells().Cells[29].Content ).toBe('C'));

  });

  describe('DataService Test Jenkins', () => {
    let service = new DataService('true');
    let testresult = service.getTestNumber();

    it('dataservice getTestNumber', () => expect(testresult ).toBe(42)); //Success
    //it('dataservice getTestNumber', () => expect(testresult ).toBe(41)); //Failed

  });
