import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostOfficeEntity } from './interface/postofficeEntity';
import { Shipments} from './interface/postofficeEntity';
import { PostofficeService } from './postoffice.service';

@Component({
  selector: 'app-postoffice',
  templateUrl: './postoffice.component.html',
  styleUrls: ['./postoffice.component.scss']
})
export class PostofficeComponent implements OnInit {
  isShipmentsContainerEnabled: boolean;
  postOfficeData: PostOfficeEntity[];
  shipmentsDta:PostOfficeEntity[];
  name: string;
  zipcode: number;
  postalId:number;
  postOfficeDetail: PostOfficeEntity;
  btnName: string;
  constructor(private activatedRoute: ActivatedRoute, private postOfficeService: PostofficeService,
    private router: Router) {
    this.isShipmentsContainerEnabled= false;
    this.postOfficeData=[];
    this.btnName='Submit';
   }

  ngOnInit() {

    this.activatedRoute.params.subscribe((param)=>{
      if(param.id){
        // case Edit
        this.postalId=param.id;
        this.btnName='Update';
        this.isShipmentsContainerEnabled=true;
        this.postOfficeDetail=this.postOfficeService.getPostOfficeDetailsById(this.postalId);
        this.name= this.postOfficeDetail.name;
        this.zipcode= this.postOfficeDetail.zip_code;
      }
    });

   
  }
  redirectToaddShipments(){
    this.router.navigate(['shipments']);
  }
  addDetails(){
    this.postOfficeData.push(
      {
        id: this.postOfficeService.getNewestId(),
        name: this.name,
        zip_code: this.zipcode,
        shipments: []
      }
    );
    this.postOfficeService.addPostOfficeDataToStorage(this.postOfficeData);
    this.router.navigate(['']);
  }
  editDetails(){
    const datas: PostOfficeEntity[] = this.postOfficeService.getPostOfficeDetails();
    datas.splice(datas.findIndex((x)=> x.zip_code === this.postalId), 1);
    this.postOfficeService.removePostOfficeDataFromStorage();
    datas.push({
      id: 0,
      name: this.name,
      zip_code: this.zipcode,
      shipments: []
    });
    this.postOfficeService.addPostOfficeDataToStorage(datas);
    this.router.navigate(['']);
  }



  fetchShipmentData(){
    this.postOfficeService.getShipmentData().subscribe((response)=>{
      console.log(response);
    });
  }
}
