import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillComponent } from './skill/skill.component.js';
import { DevelopeurComponent } from './developeur/developeur.component.js';

import { ReactiveformtestComponent } from './reactiveformtest/reactiveformtest.component.js';
import { ParentComponent } from './testInput/parent/parent.component.js';
import { EnfantComponent } from './testInput/enfant/enfant.component.js';
import { Reactive2Component } from './reactive2/reactive2.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SkillComponent,
    DevelopeurComponent,
    ReactiveformtestComponent,
    ParentComponent,
    EnfantComponent,
    Reactive2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inputoutput';
}
