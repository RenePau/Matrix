import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';

import {AppComponent} from '../app.component';
import {MatrixComponent} from "../views/matrix.component";
import {MatrixModule} from '../views/matrix.module';


import {DataService} from './dataservice';
import {TEST} from './dataservice';


describe('DataService', () => {
    let service: DataService;

    /*
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DataService]
        });
        //.compileComponents();  // compile template and css
        service = TestBed.get(DataService);
      }));
    */
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:  [DataService, { provide: TEST, useValue: 'false'}]
        });
        service = TestBed.get(DataService);
    });
    

    /*
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers:    [ DataService ],
        })
        //.compileComponents();  // compile template and css
        service = TestBed.get(DataService);
      }));
      */
    

    
  
    //it('dataservice exist', async( () => expect(service.getIndex).toBe(0)) )
    /*
    it('dataservice exist (async)', async(() => {
        
        expect(service.getIndex).toBe(0);
        
      }));
      */
      

      it('dataservice getIndex', () => expect(service.getIndex() ).toBe(0));
      //let result = service.getNewRowCells();
      it('dataservice getNewRowCells()', () => expect(service.getNewRowCells().Row ).toBe(1));
      it('dataservice getIndex2', () => expect(service.getIndex() ).toBe(0));

      //it('dataservice test', () => expect(0).toBe(0));
      //it('dataservice test', () => expect(0).toBe(0));

      //let result2 = spyOn(service, 'getIndex').and.returnValue(true);
      

  });
  

  
  