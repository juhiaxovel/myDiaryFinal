import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component'
import { EntryDataComponent } from './entry-data/entry-data.component';

const routes: Routes = [
  {path: 'signup', component: SignUpFormComponent },
  { path: '', component: LoginFormComponent },
  { path: 'create', component: DiaryEntryComponent },
  {path: 'manage', component: EntryDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
