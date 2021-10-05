import { Component, OnInit } from '@angular/core';
import {UnitConverterService} from './services/unit-converter.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-unit-converter-ui',
  templateUrl: './unit-converter-ui.component.html',
  styleUrls: ['./unit-converter-ui.component.css']
})
export class UnitConverterUiComponent implements OnInit {
  categoryValueCopy: string;
  converterValueCopy: string;
  inputValueCopy:string;
  outputValueCopy:string;
  inputPrompt = 'Key in value';
  outputPrompt = 'Converted value';

  categoryModels: {name: string, index: string}[] = [];
  converterModels:  {name: string, index: string, unitIn:string, unitOut:string}[]= [];
  
  

  constructor(private unitConverterService : UnitConverterService) { }

  ngOnInit(): void {
    //ToDo initialize categories and converters.
    this.categoryValue = '0';
    this.converterValue = '0';

    this.setupCategoryModels();
    this.setupConverterModels(parseFloat(this.categoryValue))


    console.log('categoryModels: ' + JSON.stringify(this.categoryModels));
    console.log('converterModels: ' + JSON.stringify(this.converterModels));
  }

  setupCategoryModels(){
    const cats = this.unitConverterService.getCategories(); 
    
    for(let i =0; i< cats.length; i++){
      const cat = cats[i];
      this.categoryModels.push({name:cat.getName(),index: '' + i});
    }
 
  }

  setupConverterModels(catIndex: number){
    const cats = this.unitConverterService.getCategories(); 
    const cat = cats[catIndex];
    const convs = cat.getConverters();
    this.converterModels = [];

    for(let i =0; i<convs.length;i++){
      const conv = convs[i];
      this.converterModels.push({name: conv.getName(), index: '' + i , unitIn: conv.getInputUnit(), unitOut: conv.getOutputUnit()});
    }
  }


  onSubmit(e){
    console.log(`Submit `);
  }
  
  set inputValue(value:string){
    this.inputValueCopy = value;  

    const cats = this.unitConverterService.getCategories();
    const cat = cats[parseInt(this.categoryValueCopy, 10)]; 
    const convs = cat.getConverters();
    const conv = convs[parseInt(this.converterValueCopy, 10)];
    if(value !== ''){
       this.outputValue = conv.convert(value); 
    }
    else{
      this.outputValue = '';
    }

  }

  get inputValue():string{
    return this.inputValueCopy;
  }

  set outputValue(value:string){
    this.outputValueCopy = value;  
  }

  get outputValue():string{
    return this.outputValueCopy;
  }

  //catergories
  set categoryValue(value:string){
    this.categoryValueCopy = value;  
    this.converterValue ="0";
    this.setupConverterModels(parseFloat(value));
    this.inputValue = '';
    

    //Todo update icon
    ////
    //
    //


}

  get categoryValue():string{
    return this.categoryValueCopy;
  }

  //converters
  set converterValue(value:string){ 
    this.converterValueCopy = value;  
    const cats = this.unitConverterService.getCategories();
    const cat = cats[parseInt(this.categoryValueCopy, 10)]; 
    const convs = cat.getConverters();
    const conv = convs[parseInt(this.converterValueCopy, 10)];
    this.inputPrompt = 'Input as ' + conv.getInputUnit();
    this.outputPrompt = 'Output as ' + conv.getOutputUnit();
    this.inputValue = this.outputValue;
    
  }

  get converterValue():string{
    return this.converterValueCopy;
  }
}
