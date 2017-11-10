import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


import {DataService} from '../data/dataservice';
 
@Injectable()
export class Service {
    // Observable  source
   

    constructor(private service: DataService){
        
        if(this.service){
            //this.planModel = this.service.loadWeekData();
            //this.modelPlanSource.next(this.planModel);//update model
        }
    }


    // Observable string streams
    //modelPlan$ = this.modelPlanSource.asObservable(); // for subscribers

    // Service message commands
   
    

   
   

    

    

    

    trigger(value:string){
        //this.planModel.trigger(value);
        //this.modelPlanSource.next(this.planModel);//update model
    }

}