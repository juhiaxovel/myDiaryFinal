import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DiaryEntryComponent } from './diary-entry/diary-entry.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { EntryDataComponent } from './entry-data/entry-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DiaryEntryComponent,
    LoginFormComponent,
    SignUpFormComponent,
    EntryDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
