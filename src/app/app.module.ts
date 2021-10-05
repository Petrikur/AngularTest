import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

//angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


import { UnitConverterUiComponent } from './unit-converter-ui/unit-converter-ui.component';
import { UnitConverterService } from './unit-converter-ui/services/unit-converter.service';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UnitConverterUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule, 
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [UnitConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
