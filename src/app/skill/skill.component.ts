import { Component, Input } from '@angular/core';
// import { Skills } from '../model/Skill.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  @Input()
  name: string = '';

  @Input()
  logo: string = '';

  @Input()
  site: string = '';
}
