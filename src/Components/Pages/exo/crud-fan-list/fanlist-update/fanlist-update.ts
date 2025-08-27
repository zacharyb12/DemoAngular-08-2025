import { Component, inject } from '@angular/core';
import { FanlistService } from '../service/fanlist-service';
import { ActivatedRoute } from '@angular/router';
import { Fan } from '../../../../shared/Models/fan.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fanlist-update',
  imports: [
    FormsModule
  ],
  templateUrl: './fanlist-update.html',
  styleUrl: './fanlist-update.css'
})
export class FanlistUpdate {

  private readonly fanService = inject(FanlistService);
  private readonly activRoute = inject(ActivatedRoute);

  fan: Fan ;

  constructor(){
    const id = +this.activRoute.snapshot.params['id'];
    this.getFan(id);
  }

  getFan(id : number){
    this.fan = this.fanService.getFanById(id);
  }

  updateFan(){
    this.fanService.updateFan(this.fan.id, this.fan);
  }

}
