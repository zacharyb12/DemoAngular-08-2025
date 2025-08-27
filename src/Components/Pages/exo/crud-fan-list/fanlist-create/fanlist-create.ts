import { Component, inject } from '@angular/core';
import { FanlistService } from '../service/fanlist-service';
import { Fan } from '../../../../shared/Models/fan.model';

@Component({
  selector: 'app-fanlist-create',
  imports: [],
  templateUrl: './fanlist-create.html',
  styleUrl: './fanlist-create.css'
})
export class FanlistCreate {

  private readonly fanService = inject(FanlistService);


  fan : Fan = {
    id: 0,
    name: '',
    birthDate: new Date(),
    listSeries : []
  };

  

}
