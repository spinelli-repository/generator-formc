import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  fields: any[];
  formData: any = {};

  constructor() {
  }

  onSubmit() {
    console.log(this.formData);
  }
}
