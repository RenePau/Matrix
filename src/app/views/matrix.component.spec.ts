import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { MatrixComponent } from './matrix.component';
import {CellComponent} from './cell.component';
import {DataService} from '../data/dataservice';
import {RowCells} from '../model/rowcells.model';


class DataServiceStub {    
    public getIndex():number{
        return 55;
    } 

    public getNewRowCells():RowCells{
        return new RowCells(66);
    }     
 }



describe('matrix component', () => {
    let comp:    MatrixComponent;
    let fixture: ComponentFixture<MatrixComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;
    let de2:      DebugElement;
    let el2:      HTMLElement;
    let service: DataService;

    let dataServiceStub = {
        getIndex():number{
            return 55;
        }
      };


      /*
      TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [LoginComponent],
    }).overrideComponent(LoginComponent, {
      set: {
        providers: [
          {provide: AuthenticationService, useValue: authServiceMock},
          {provide: Router, useValue: routerStub}
        ]
      }}
      ).compileComponents();



      */
    
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpModule],
            declarations: [ MatrixComponent, CellComponent ], // declare the test component
            providers:    [ {provide: DataService, useClass: DataServiceStub } ] 
        });
        //.compileComponents();  // compile template and css:  NOT for WebPack
    }));
    

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpModule],
            declarations: [ MatrixComponent,  CellComponent ], // declare the test component
            providers:    [ {provide: DataService, useClass: DataServiceStub } ] // useClass: usevalue
        
        }).overrideComponent(MatrixComponent, {
            set: {
              providers: [
                {provide: DataService,  useClass: DataServiceStub}
              ]
            }}
            );
    
        fixture = TestBed.createComponent(MatrixComponent);

        comp = fixture.componentInstance; // MatrixComponent test instance
        
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h4'));
        el = de.nativeElement;
        de2 = fixture.debugElement.query(By.css('h6'));
        el2 = de2.nativeElement;

        service = TestBed.get(DataService);

    });

    it('should display original test', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.test);
    });

    it('should display a different test', () => {
        comp.test = 'Test123';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test123');
      });

    it('should display old test until manually call `detectChanges`', () => {
        comp.test = 'Test12';
        expect(el.textContent).toEqual('');
    });
      
    it('should display original test2', () => {
        fixture.detectChanges();
        expect(el2.textContent).toContain(comp.test2);
    });

});




