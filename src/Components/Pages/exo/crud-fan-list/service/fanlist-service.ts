import { Injectable } from '@angular/core';
import { Fan } from '../../../../shared/Models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanlistService {

  fanList : Fan[] = [
    {
      id: 1,
      name: 'John Doe',
      birthDate: new Date('2000-01-15'),
      listSeries: ['Series A', 'Series B']
    },
    {
      id: 2,
      name: 'Jane Smith',
      birthDate: new Date('2010-05-20'),
      listSeries: ['Series C']
    }
  ];

  addFan(fan : Fan){
      this.fanList.push(fan);
    
  }
    
  getFans() : Fan[]{
    return this.fanList;
  }

  getFanById(id : number) : Fan | undefined {
    return this.fanList.find(fan => fan.id === id);
  }

  updateFan(id : number, updatedFan : Fan) : boolean {
    const index = this.fanList.findIndex(fan => fan.id === id);
    if (index !== -1) {
      this.fanList[index] = updatedFan;
      return true;
    }
      return false;
  }

  deleteFan(id: number){
    this.fanList = this.fanList.filter(fan => fan.id !== id);
  }
}
