import { Component, OnInit, Input, Output, EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  constructor() { }

  @Input() dropdownValues: any
  @Input() sharedVar: any;
  @Input() label: string;
  @Input() fieldId: string;
  @Input() isMandatory: boolean;
  @Input() isDisabled: boolean;
  @Input() showErrorMessage: boolean;
  @Input() toolTip: string= ""

  

  @Output() sharedVarChange = new EventEmitter();

  dropdownSelectedId: any = null;

  ngOnInit() {
    if (this.dropdownValues == null) {
      this.dropdownValues = []
      this.dropdownValues.push({
        id: 1,
        text: `1 Day`
      })
      for (var i = 2; i <= 15; i++) {
        this.dropdownValues.push({
          id: i,
          text: `${i} Days`
        })
      }
      this.dropdownValues.push({
        id: 30,
        text: `1 Month`
      })
      for (var i = 2; i <= 6; i++) {
        this.dropdownValues.push({
          id: 30 * i,
          text: `${i} Months`
        })
      }
      this.dropdownValues.push({
        id: 365,
        text: `1 Year`
      })
      for (var i = 2; i <= 10; i++) {
        this.dropdownValues.push({
          id: 365 * i,
          text: `${i} Years`
        })
      }
    }
    for (var i = 0; i < this.dropdownValues.length; i++) {
      if (this.dropdownValues[i].id == null) {
        this.dropdownValues.splice(i, 1);
      }
    }
    this.dropdownValues.unshift(
      {
        id: null,
        text: `  -- Select ${this.label} --`
      }
    )
    if (this.sharedVar == undefined) {
      this.sharedVar = null
    }
  }
  change(newValue) {
    console.log('newvalue', newValue)
    this.sharedVar = newValue;
    this.sharedVarChange.emit(newValue);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dropdownValues']) {
      if(this.dropdownValues != undefined){
        let item1 = this.dropdownValues.find(i => i.id === null);
        if(item1 == undefined){
          this.dropdownValues.unshift(
            {
              id: null,
              text: `  -- Select ${this.label} --`
            }
          )
        }
      }
    }
  }

}