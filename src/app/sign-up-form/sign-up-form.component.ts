import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  registerForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    UserEmail: new FormControl('', Validators.required),
    UserPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)

  });
  errorMsg = {
    UserName: 'this is required',
    UserEmail: 'this is required',
    UserPassword: 'this is required',
    confirmPassword: 'this is required'
  }
  constructor(private diaryService: DiaryService) { }

  ngOnInit() {
  }
  markFieldsAsDirty() {
    Object.keys(this.registerForm.controls).forEach(field => {
      const control = this.registerForm.get(field);
      control.markAsDirty({ onlySelf: true });
    });
  }
  onSignUp(){
    this.markFieldsAsDirty();
    // console.log(this.registerForm.value);
    const getValue = this.registerForm.value;
    this.diaryService.getRegisterDetail(getValue).subscribe(result =>{
      // console.log(result);
    });
  }
}
