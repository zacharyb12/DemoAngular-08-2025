import { Component, inject, OnInit } from '@angular/core';
import { FanlistService } from '../service/fanlist-service';
import { Fan } from '../../../../shared/Models/fan.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-fanlist-details',
  imports: [
    DatePipe
  ],
  templateUrl: './fanlist-details.html',
  styleUrl: './fanlist-details.css'
})
export class FanlistDetails implements OnInit {
  
  private readonly fanService = inject(FanlistService);
  private readonly activRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  fan : Fan;
  constructor(){}
  
  ngOnInit(): void {
    const id = +this.activRoute.snapshot.params['id'];
    this.fan = this.fanService.getFanById(id);
  }
    
  updateFan(){
    this.router.navigate([`/exo/fan-list/update/${this.fan.id}`]);
  }
  
  deleteFan(){
    this.fanService.deleteFan(this.fan.id);
    this.router.navigate(['/exo/fan-list/liste']);
  }
}
