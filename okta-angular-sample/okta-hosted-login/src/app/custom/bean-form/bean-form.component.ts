import { Component, OnInit } from '@angular/core';
import { Bean } from '../bean';

@Component({
  selector: 'app-bean-form',
  templateUrl: './bean-form.component.html',
  styleUrls: ['./bean-form.component.css']
})
export class BeanFormComponent implements OnInit {

  a: String = "b";

  constructor() { }

  ngOnInit() {
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Bean(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
