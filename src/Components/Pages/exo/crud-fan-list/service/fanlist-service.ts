import { Injectable } from '@angular/core';
import { Fan } from '../../../../shared/Models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanlistService {

  fanList : Fan[] = [];

  addFan(fan : Fan){
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate()
    );  

    if (fan.birthDate < minDate) {
      fan.id = this.fanList.length + 1;
      this.fanList.push(fan);
    }
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

}
