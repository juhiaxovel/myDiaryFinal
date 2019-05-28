import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  Loginform = new FormGroup({
    LoginName: new FormControl ('', Validators.required),
    loginPassword: new FormControl ('', Validators.required)
  });

  constructor(private diaryService: DiaryService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.Loginform.value);
    this.diaryService.getLoginDetail().subscribe(res=> {
      console.log(res);
      let found = false;
      for ( let i = 0; i < res.length; i++){
        const out = res[i];
        const logValue = this.Loginform.value.LoginName;
        // console.log(out);
        if((logValue == out.name || logValue == out.email) && logValue == out.password){
          found = true;
        }
      }
      if(found) {
        console.log('matched and found');
      } else {
        console.log('not found');
      }
    });
  }
}
