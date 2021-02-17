import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//components
import { AppComponent } from './app.component';
import { TodoList } from './Todo-List-App/containers/TodoList/todo-list.component';
import { TodoEmptyComponent } from './Todo-List-App/components/todo-empty/todo-empty.component';
///services
import { TodoService } from './Todo-List-App/services/todo.service';
//x-tra
import { AutofocusModule } from 'angular-autofocus-fix';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TodoList,
    TodoEmptyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutofocusModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
