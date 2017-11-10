import { Component, ElementRef, OnInit, OnChanges, AfterViewInit, ViewChild, Input, OnDestroy, SimpleChanges } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import 'rxjs/add/observable/interval'; 
import 'rxjs/add/operator/takeWhile';
import { Observable } from 'rxjs/Observable';

import {DataService} from '../data/dataservice'; 
import {Cell} from '../model/cell.model';
import {RowCells} from '../model/rowcells.model';
import {Matrix} from '../model/matrix.model';

import {CellComponent} from './cell.component';

//import * as $ from 'jquery'; // ‘jquery’;
//import 'jquery-confirm';
import 'jquery';
//import * as $ from 'jquery';

//import * as $ from 'jquery';


@Component({
  selector: 'matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  
  public indexrow: number;
  public test:string;
  public test2:string;
  public test3:string;
  //public cell:Cell;
  //public rowCells: RowCells;
  public matrix: Matrix;
  
  private stopcondition:boolean;
  private loops:number;
  private maxloops:number;
  private intervalms:number;
  public errormessage:string;

    /*
  constructor() {
    this.indexrow =  -1;
    this.test = 'begin';
  }
  */

  
  constructor(private service: DataService) {
    this.indexrow =  service.getIndex();
    this.test = 'begin';
    this.test2 = 'begin';
    //this.cell=new Cell(15);
    //this.rowCells = service.getNewRowCells();
    this.matrix = new Matrix(30);
    for(var i=0; i<30; i++){
      //this.matrix.addNewRowCell(this.rowCells);
      this.matrix.addNewRowCell(this.service.getNewRowCells());
    }
    

    this.stopcondition = false;
    this.loops = 0;
    this.maxloops = 30;
    this.intervalms = 100;
  }
  

  public ngOnInit(){
      
    //let newrows = this.service.getNewRowCells();
    /*
    if(this.rowCells){
        this.test3 = 'new row '+this.rowCells.Row + ' with '+ this.rowCells.Cells.length;
    }
    */
    this.indexrow = this.service.getIndex();
    
  $("<style type='text/css'>#boxMX{display:none;background: #333;padding: 10px;border: 2px solid #ddd;float: left;font-size: 1.2em;position: fixed;top: 50%; left: 50%;z-index: 99999;box-shadow: 0px 0px 20px #999; -moz-box-shadow: 0px 0px 20px #999; -webkit-box-shadow: 0px 0px 20px #999; border-radius:6px 6px 6px 6px; -moz-border-radius: 6px; -webkit-border-radius: 6px; font:13px Arial, Helvetica, sans-serif; padding:6px 6px 4px;width:300px; color: white;}</style>").appendTo("head");



    Observable.interval(this.intervalms)
    .takeWhile(() => !this.stopcondition)
    .subscribe(i => { 
        // This will be called every 1/10 seconds until `stopCondition` flag is set to true
        //console.log('loop '+this.loops);
        this.loops++;
        this.matrix.addNewRowCell(this.service.getNewRowCells());
        if(this.loops>this.maxloops){
          this.stopcondition = true;
          //alert('matrix system error');
          //jQuery.al
          /*
          $.alert({
            title: 'Alert!',
            content: 'Simple alert!',
          });
          */
          
          //$('.title').slideToggle();
          //jQuery('.title').slideToggle();

          /*
          jQuery.alert({
            title: 'Matrix System Error',
            content: 'Go back asap to your VR'
        });
        */

        //$("table").fadeOut(10000, "linear" );
        /*
        $("table").animate({
          opacity: '0.3'
          },5000,"swing");

        */
        //alert('matrix system error');
        
        jQuery('.title').slideToggle();
        this.alertMX('Matrix System Error');
      }
    })
    
  }

  alertMX(t){
    $( "body" ).append( $( "<div id='boxMX'><p class='msgMX'></p><p>  </p></div>" ) );
    $('.msgMX').text(t); var popMargTop = ($('#boxMX').height() + 24) / 2, popMargLeft = ($('#boxMX').width() + 24) / 2; 
    $('#boxMX').css({ 'margin-top' : -popMargTop,'margin-left' : -popMargLeft}).fadeIn(600);
    $("#boxMX").click(function() { $(this).remove(); });
  }

  


}
