class DateHour {
     
  private date: Date;
  private relativeHour: number;
     
    /*
      constructor (year: number, month: number, day: number, relativeHour: number) {
        this.date = new Date(year, month, day);
        this.relativeHour = relativeHour;
      }
     
      constructor (date: Date, relativeHour: number) {
        this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        this.relativeHour = relativeHour;
      }
    */
    
    constructor(year: number, month: number, day: number, relativeHour: number);
    constructor(date: Date, relativeHour: number);
    constructor(dateOrYear: any, monthOrRelativeHour: number, day?: number, relativeHour?: number) {
        if (typeof dateOrYear === "number") {
          this.date = new Date(dateOrYear, monthOrRelativeHour, day);
          this.relativeHour = relativeHour;
        } else {
          var date = <Date> dateOrYear;
          this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
          this.relativeHour = monthOrRelativeHour;
        }
    }
 
}