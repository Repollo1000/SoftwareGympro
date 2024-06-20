import { Component, OnInit } from '@angular/core';
import { CorporalService } from '../../services/corporal.service';


@Component({
  selector: 'app-corporal',
  templateUrl: './corporal.page.html',
  styleUrls: ['./corporal.page.scss'],
})
export class CorporalPage  implements OnInit {

  corporal: any[] = [];

  constructor(private corporalService: CorporalService) { }

  ngOnInit() {
    this.getCorporal();
  }

  getCorporal() {
    this.corporalService.getCorporal().subscribe(
      (data: any[]) => {
        console.log('corporal recibidas:', data);
        this.corporal = data;
      },
      (error: any) => {
        console.error('Error al obtener las corporal:', error);
      }
    );
  }
}