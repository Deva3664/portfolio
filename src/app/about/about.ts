import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  stats = [
    { value: '2+', label: 'Years Coding' },
    { value: '5+', label: 'Projects Built' },
    { value: '5+', label: 'Technologies' },
    { value: '3+', label: 'Happy Clients' }
  ];

  techStack = [
    'Angular', 'TypeScript', 'JavaScript',
    'HTML', 'CSS', 'Node.js',
    'MongoDB', 'Git', 'Figma'
  ];
}