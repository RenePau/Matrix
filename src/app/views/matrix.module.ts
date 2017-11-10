import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ModelModule } from "../model/model.module";

import {MatrixComponent} from "./matrix.component";
import {CellComponent} from './cell.component';



@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule ],
    declarations: [MatrixComponent, CellComponent],
    exports: [MatrixComponent] 
})
export class MatrixModule { }