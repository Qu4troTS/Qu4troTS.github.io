import { UtilsService } from '../../../services/utils.service';
import * as stringDecoder from 'string_decoder';
import { HomepageService } from '../../../services/homepage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qu4tro-home-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  services: Array<any>;

  constructor(
    private homePageSvc: HomepageService,
    private utilsSvc: UtilsService,
  ) {
    this.initServices();
  }

  ngOnInit() {
  }

  private initServices() {
    this.services = [];
    this.homePageSvc.listServices().subscribe(data => this.services = data.json());
  }

  trim(text: string) {
    return this.utilsSvc.trim(text);
  }

}
