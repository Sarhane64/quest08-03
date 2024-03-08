import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css',
})
export class EnfantComponent {
  @Input() name: string = '';
  @Input() surname: string = '';
  @Input() age: number = 0;
  @Input() gender: string = '';
  @Input() send: boolean = false;
}
