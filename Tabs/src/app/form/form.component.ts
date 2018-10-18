import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public result = "";
  public name = "";
  public surname = "";
  public age = "";
  constructor() { }

  ngOnInit() {
  }

  onClick(){

    this.result = this.name + " " + this.surname + " tiene " + this.age + " años.";

  }

}
