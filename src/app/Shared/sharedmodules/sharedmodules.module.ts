import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  providers: [provideHttpClient()],
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule
  ]
})
export class SharedmodulesModule { }
