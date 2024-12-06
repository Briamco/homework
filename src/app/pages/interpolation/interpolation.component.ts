import { Component, signal } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  title = 'Bienvenido'

  profiles = signal<Profile[]>([])

  add(name: string, lastName: string, age: number) {
    this.profiles.set([
      ...this.profiles(),
      {name, lastName, age}
    ])
  }

  constructor() {
    this.add('Roberto', 'Chacon', 26)
    this.add('Moises', 'Suero', 17)
    this.add('Briam', 'Gonzalez', 18)
  }
}
