import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnfantComponent } from '../enfant/enfant.component.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, EnfantComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  user = {
    name: '',
    surname: '',
    age: 0,
    gender: '',
  };

  send: boolean = false;

  startSending() {
    this.send = true;
    console.log(this.user);
    console.log(this.send);
  }
}
