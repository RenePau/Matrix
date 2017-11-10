import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {MatrixComponent} from './views/matrix.component';
import {CellComponent} from './views/cell.component';
import {DataService} from './data/dataservice';
import {TEST} from './data/dataservice';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, MatrixComponent, CellComponent
      ],
      providers: [ DataService, { provide: TEST, useValue: 'false'} ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'The Matrix'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Matrix');
  }));

  it('should render title in a h5 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('Matrix');
  }));
});
