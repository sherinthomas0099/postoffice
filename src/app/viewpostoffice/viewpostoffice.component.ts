import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostofficeService } from '../postoffice/postoffice.service';
import { PostOfficeEntity } from '../postoffice/interface/postofficeEntity';
declare var $: any;
@Component({
  selector: 'app-viewpostoffice',
  templateUrl: './viewpostoffice.component.html',
  styleUrls: ['./viewpostoffice.component.scss']
})
export class ViewpostofficeComponent implements OnInit {
  postOfficeData: PostOfficeEntity[];
  constructor(private router: Router, private postOfficeService: PostofficeService) { }

  ngOnInit() {
    this.postOfficeData= this.postOfficeService.getPostOfficeDetails();
    $('#viewDetailsTbl').DataTable();
    this.postOfficeService.getAllPost().then((resp)=>{
      console.log(resp);
    });
  }
  redirectToAddPostOffice(){
    this.router.navigate(['postoffice']);
  }
  editDetails(zipcode:number){
    this.router.navigate(['postoffice',zipcode]);
  }
  deleteDetails(id){
    const datas: PostOfficeEntity[] = this.postOfficeService.getPostOfficeDetails();
    datas.splice(datas.findIndex((x)=> x.zip_code === id), 1);
    this.postOfficeService.removePostOfficeDataFromStorage();
    this.router.navigate(['']);
  }
}
