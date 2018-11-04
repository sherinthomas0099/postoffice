import { Injectable } from '@angular/core';
import { PostOfficeEntity, Shipments } from './interface/postofficeEntity';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Promise } from 'q';

@Injectable({
  providedIn: 'root'
})
export class PostofficeService {
  shipmentData= new BehaviorSubject<Shipments>(null);
  constructor(private http: HttpClient) { }

  getPostOfficeDetails(): PostOfficeEntity[]{
    if(localStorage.getItem('postOfficeData')){
     return JSON.parse(localStorage.getItem('postOfficeData'));
    }else{
      return [];
    }
  }
  getPostOfficeDetailsById(id:number): PostOfficeEntity{
    if(localStorage.getItem('postOfficeData')){
      const temp: PostOfficeEntity[]= JSON.parse(localStorage.getItem('postOfficeData'));
      return temp.filter((data)=> data.zip_code === id)[0];
    } else{
      return null;
    }
  }
  addPostOfficeDataToStorage(postOfficeData: PostOfficeEntity[]){
    if(localStorage.getItem('postOfficeData')){
      const temp: PostOfficeEntity[]= JSON.parse(localStorage.getItem('postOfficeData'));
      postOfficeData.map((data)=>{
        temp.push(data);
      });
      this.removePostOfficeDataFromStorage();
      localStorage.setItem('postOfficeData', JSON.stringify(temp));
    }else{
      localStorage.setItem('postOfficeData', JSON.stringify(postOfficeData));
    }
  }
  removePostOfficeDataFromStorage(){
    localStorage.removeItem('postOfficeData');
  }
  setShipmentData(data){
    this.shipmentData.next(data);
  }
  getShipmentData(){
    return this.shipmentData;
  }
  getNewestId(){
    return this.getPostOfficeDetails().length + 1;
  }
  getAllPost(){
    const promise=  Promise((resolve,reject)=>{
       resolve(this.http.get('https://jsonplaceholder.typicode.com/posts'));
    });
    return promise;
  }
}
