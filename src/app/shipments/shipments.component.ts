import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostOfficeEntity, Shipments } from '../postoffice/interface/postofficeEntity';
import { PostofficeService } from '../postoffice/postoffice.service';
@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit {
  shipmentsData: PostOfficeEntity[];

  name: string;
  weight: number;
  status: string;
  data: Shipments;
  @Output() valueChange = new EventEmitter();

  constructor(private activatedRoute:ActivatedRoute,private postOfficeService:PostofficeService,
    private router:Router) { }

  ngOnInit() {
  }
  addShipments(){
    this.data= {
      id:'',
      name: this.name,
      weight: this.weight,
      status: this.status
    }
    this.postOfficeService.setShipmentData(this.data);
  }

}
