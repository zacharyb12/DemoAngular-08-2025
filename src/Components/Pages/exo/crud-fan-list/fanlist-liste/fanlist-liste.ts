import { Component, inject, OnInit } from '@angular/core';
import { FanlistService } from '../service/fanlist-service';
import { Fan } from '../../../../shared/Models/fan.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fanlist-liste',
  imports: [
    DatePipe
  ],
  templateUrl: './fanlist-liste.html',
  styleUrl: './fanlist-liste.css'
})
export class FanlistListe implements OnInit {

  private readonly fanService = inject(FanlistService);
  private readonly router = inject(Router);

  listFan: Fan[] = [];

  ngOnInit() {
    this.listFan = this.fanService.getFans();
  }

  createFan(){
    this.router.navigate(['exo/fan-list/create']);
  }

  detailsFan(id: number){
    this.router.navigate([`exo/fan-list/details/`,id]);
  }


}
