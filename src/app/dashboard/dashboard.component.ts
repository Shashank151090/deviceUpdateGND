import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  startDeviceId: string;
  endDeviceId: string;
  params: string;
  showSpinner: boolean = false;

  ngOnInit() {
  }
  update() {
    let startIndex = parseInt(this.startDeviceId,16);
  let endIndex = parseInt(this.endDeviceId,16)
  let noOfDevice = endIndex - startIndex;
  let dataToSend = {
    deviceId:"",
    params:""
  };
  for( let i=0; i<= noOfDevice; i++) {
    let k = i;
    let that = this;
    
    setTimeout(function(){
      dataToSend.deviceId = that.startDeviceId;
      dataToSend.params = that.params? "/"+that.params : "";
      that.apiService.sendUpdate(dataToSend).subscribe((data) => {
        console.log("data sent")
      });
      startIndex ++;
      let hexstartDeviceId= startIndex.toString(16);
      that.startDeviceId = hexstartDeviceId.toString();
    }, 3000 * (k + 1));
   
    
  }
  }

}
