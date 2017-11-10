import { Cell } from './cell.model';


describe('Cell: Constructor', () => {
  let cell: Cell;

  beforeEach(() => { 
    cell = new Cell(-9);
  });

  afterEach(() => { 
    cell = null;
  });

  it('cell with negative number -9: content 9', () => expect(cell.Content).toBe('9'));
  it('cell with negative number -9: Id 9', () => expect(cell.Id).toBe(9));
});

describe('Cell: Constructor', () => {
  let cell: Cell;

  beforeEach(() => { 
    cell = new Cell(0);
  });

  afterEach(() => { 
    cell = null;
  });

  it('Cell(0): content 0', () => expect(cell.Content).toBe('0'));
  it('Cell(0): Id 0', () => expect(cell.Id).toBe(0));
});

describe('Cell: Constructor', () => {
  let cell: Cell;

  beforeEach(() => { 
    cell = new Cell(10);
  });

  afterEach(() => { 
    cell = null;
  });

  it('Cell(10): content A', () => expect(cell.Content).toBe('A'));
  it('Cell(10): Id 10', () => expect(cell.Id).toBe(10));
});

describe('Cell: Constructor', () => {
  let cell: Cell;
  let t: number = 16;

  beforeEach(() => { 
    cell = new Cell(t);
  });

  afterEach(() => { 
    cell = null;
  });

  it('Cell('+t+'): content empty', () => expect(cell.Content).toBe(''));
  it('Cell('+t+'): Id '+t, () => expect(cell.Id).toBe(t));
});

describe('Cell: Constructor', () => {
  let cell: Cell;

  beforeEach(() => { 
    cell = new Cell(17);
  });

  afterEach(() => { 
    cell = null;
  });

  it('Cell(17): content 0', () => expect(cell.Content).toBe('0'));
  it('Cell(17): Id 17', () => expect(cell.Id).toBe(17));
});


describe('Cell: Constructor', () => {
  let cell: Cell;

  beforeEach(() => { 
    cell = new Cell(2.22);
  });

  afterEach(() => { 
    cell = null;
  });

  it('Cell(2.22): content 2', () => expect(cell.Content).toBe('2'));
  it('Cell(2.22): Id 2', () => expect(cell.Id).toBe(2));
});