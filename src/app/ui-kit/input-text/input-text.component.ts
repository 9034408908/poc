import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() sharedVar: any;
  @Input() label: string;
  @Input() fieldId: string;
  @Input() isMandatory: boolean;
  @Input() isCapital: boolean;
  @Input() pattern: any
  @Input() invalidMsg: string
  @Input() isDisabled: boolean;
  @Input() patternType: string // using patternType will override pattern and invalidMsg
  @Input() maxLength: number
  @Input() isFocus: boolean
  @Input() toolTip: string=""
  @Input() isDate:boolean
  @Input() showErrorMessage: boolean;
  lengthErrorMessage: string;
  lengthValid: boolean = true;

  @Output() sharedVarChange = new EventEmitter();

  //@ViewChild('modelRef') modelRef: NgModel;

  patternMessage: any = [
    {
      type: "mobile",
      message: "Input Should be 10 Digit Number"
    },
    {
      type: "email",
      message: "Input Format Should be abc@xyz.eg"
    },
    {
      type: "alphabet",
      message: "Input Should be Only Alphabets"
    },
    {
      type: "gstno",
      message: "Invalid GST No"
    }
  ]

  finalOutputText: any

  ngOnInit() {
    this.lengthErrorMessage = `Maximum Allowed Length is ${this.maxLength}`
    if (this.patternType != undefined) {
      switch (this.patternType) {
        case "alphabet":
          this.pattern = '^[a-zA-Z]+([ ][a-zA-Z]+)*$';
          this.invalidMsg = "Input Should be Only Alphabets";
          break;

        case 'alphaNumeric':
          this.pattern = '^[a-zA-Z0-9]+([ ][a-zA-Z0-9]+)*$';
          this.invalidMsg = "Input Should be Only Alphabets or Numbers";
          break;

        case "email":
          this.pattern = '[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
          this.invalidMsg = "Input Format Should be abc@xyz.eg"
          break;
          
        case "mobile":
          this.maxLength = 10;
          this.pattern = '^[0-9]{10}$';
          this.invalidMsg = "Input Should be 10 Digit Number";
          break;

        case "numeric":
          this.pattern = '^[0-9]*$';
          this.invalidMsg = "Input Should be Number"
          break;

        case "pincode":
          this.maxLength = 6;
          this.pattern = '^[0-9]{6}$';
          this.invalidMsg = "Input Should be 6 Digit Number";
          break;

        case "email":
          this.pattern = '[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
          this.invalidMsg = "email invalid"
          break;

        case "gstno":
          this.pattern = '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[Z]{1}[0-9A-Z]$';
          this.invalidMsg = "GST No invalid"
          break;

        case "yearfilter":
        //this.maxLength = 4;
        this.pattern = '(20[0-9]{2}|2100)';
        this.invalidMsg="Year should be between 2000 to 2100"
        break;

        case "dateformat":
        this.pattern = '^*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})*$';
        this.invalidMsg = "Date format is invalid"
        break;
      }
    }
  }

  ngAfterViewInit() {
    console.log(this.isFocus)
    if (this.isFocus == true) {
      document.getElementById(this.fieldId).focus();
    }
  }

  change(newValue) {
    if (newValue != null) {
      var stringLength: number = newValue.length

      if (!newValue.replace(/\s/g, '').length) {
        if (stringLength > 1) {
          this.invalidMsg = `Please enter any character`
         //this.modelRef.control.setErrors({ 'invalid': true })
        }
      }
      if (newValue != null) {
        newValue = newValue.trim();
      }

      if (newValue == "") {
        if (this.isMandatory == true && this.showErrorMessage != false) {
          if (stringLength < 1) {
            this.invalidMsg = "Required"
            this.lengthValid = true
          } else {
            this.invalidMsg = `Please enter any character`
          }
          //this.modelRef.control.setErrors({ 'invalid': true })
        }
        else if(this.showErrorMessage == false){
          this.invalidMsg = " "
        }
         else {
          this.setDefaultPatternMsg()
        }
      } 
     
      else {

        if (this.maxLength != undefined) {
          if (newValue.length == this.maxLength) {
           // this.lengthValid = false
           // this.lengthErrorMessage = `Maximum Allowed Length is ${this.maxLength}`
            //this.currentModel.control.setErrors({ 'invalid': true })
          }
          else if(newValue.length > this.maxLength){
            this.invalidMsg = `Maximum Allowed Length is ${this.maxLength}`
            //this.modelRef.control.setErrors({'invalid':true})
            this.lengthValid = true
            this.lengthErrorMessage = undefined
          }
          else {
            this.lengthValid = true
            this.lengthErrorMessage = undefined
            this.setDefaultPatternMsg()
          }
        }
        /* this.setDefaultPatternMsg() */
      }
      this.sharedVar = newValue;
      this.sharedVarChange.emit(newValue);
    }
  }

  setDefaultPatternMsg() {
    if (this.patternType != null) {
      var invalidData = this.patternMessage.filter(x => x.type == this.patternType)
      if (invalidData.length > 0) {
        this.invalidMsg = invalidData[0].message
      }
    }
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sharedVar']) {
      if (this.sharedVar != undefined && this.sharedVar != '' && this.sharedVar != null) {
        if(this.sharedVar[0] != undefined){
          this.sharedVar = this.sharedVar[0].toUpperCase() + this.sharedVar.slice(1)
        }
      }
      if (this.sharedVar != undefined && this.sharedVar != '' && this.isCapital == true) {
        this.sharedVar = this.sharedVar.toUpperCase()
      }
    }
  }

  keyPress(str){
    console.log(this.lengthValid)
    console.log(str.length)
    this.lengthValid = (this.maxLength == undefined || str.length < this.maxLength) ? true : false
    console.log(this.lengthValid)
    if(this.lengthValid == false){
      setTimeout(()=>{
        this.lengthValid = true
      },2000)
      return false
    }
    
  }
}