import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // baseUrl = 'https://escavoxwebapi.azurewebsites.net/api/IoT/1.0/UpdateDeviceTwin'; 
  baseUrl = 'https://jsonplaceholder.typicode.com';


  constructor(private http: HttpClient) { }

  sendUpdate(data) {
    let dataToSend = this.baseUrl+'/'+data.deviceId+data.params;
   return this.http.get(dataToSend, {responseType: 'text'})
  }
}
