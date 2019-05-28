import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private baseUrl = 'https://dbeac871-9a42-4e67-ad8d-d2ea967a69e9.mock.pstmn.io';

  constructor(private httpClient: HttpClient) { }
  getLoginDetail(){
    const dashboardUrl = this.baseUrl + '/users';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.get<any>(dashboardUrl, {headers: headers});
  }
  getRegisterDetail(reg){
    const dashboardUrl = this.baseUrl + '/user';
    const headers = new HttpHeaders();
    // const body = new (reg.UserName, reg.UserEmail, reg.UserPassword, reg.confirmPassword)
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post<any>(dashboardUrl, reg, {headers: headers});
  }
}
