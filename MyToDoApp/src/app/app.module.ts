import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { MyDashBoardComponent } from './my-dash-board/my-dash-board.component';
import {HttpModule} from "../../../BucketListApp/angular-src/node_modules/@angular/http";
import {FormsModule} from "../../../BucketListApp/angular-src/node_modules/@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AddNewTaskComponent,
    MyDashBoardComponent
  ],
  //Modules go here
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
