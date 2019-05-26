import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import $ from 'jquery'
// var moment = require('moment');
import * as moment from 'moment';

// var datetimepicker = require('tempusdominus-bootstrap-4');

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.component.html',
  styleUrls: ['./diary-entry.component.scss']
})
export class DiaryEntryComponent implements OnInit {
  DiaryField = new FormGroup({
    dateTime: new FormControl (''),
    bodyContent: new FormControl ('', Validators.required),
    diaryTitle: new FormControl ('', Validators.required)
  })
  pContent: string = '';
  constructor() { }

  ngOnInit() {
    // load datepicker
    
    this.loadDateTimePicer();
   
    
  }
   loadDateTimePicer() {
    // initilize with a date with "05/15/2019 11:59 AM" format
    var date =  moment().format("MM-DD-YYYY HH:mm A");
    console.log(date)
     $('.datetimepicker-input').val(date);


  }


  // 26-05-2019
  // @function submit -> submit form
  // @function validation  --> check validation for input field 
  // @function SubmitRequest --> Call submit request Api

}
