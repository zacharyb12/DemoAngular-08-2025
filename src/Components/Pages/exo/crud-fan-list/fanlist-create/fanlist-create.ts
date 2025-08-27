import { Component, inject } from '@angular/core';
import { FanlistService } from '../service/fanlist-service';
import { Fan } from '../../../../shared/Models/fan.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fanlist-create',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './fanlist-create.html',
  styleUrl: './fanlist-create.css'
})
export class FanlistCreate {

  private readonly fanService = inject(FanlistService);
  private readonly router = inject(Router);

  fan : Fan = {
    id: 0,
    name: '',
    birthDate: new Date(),
    listSeries : []
  };

  errorMessage: string = '';

  ageIsValid(birthDate: Date): boolean {
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate()
    );

    return birthDate <= minDate;
  }

addFan() {
  if (this.fan.name.trim() === '') {
    this.errorMessage = "Le nom est requis.";
    return;
  }

  const birthDate = new Date(this.fan.birthDate);

  if (!this.ageIsValid(birthDate)) {
    this.errorMessage = "L'utilisateur doit avoir au moins 13 ans.";
    return;
  }

  this.fan.id = this.fanService.getFans().length + 1;
  this.fan.birthDate = birthDate;
  this.fanService.addFan(this.fan);
  this.errorMessage = "";
  this.router.navigate(['/exo/fan-list/liste']);
}


}
