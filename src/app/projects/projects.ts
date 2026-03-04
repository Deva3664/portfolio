import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio built with Angular. Dark techy theme.',
      tech: ['Angular', 'TypeScript', 'CSS'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      name: 'E-Commerce App',
      description: 'A full stack shopping app with cart and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      name: 'Weather Dashboard',
      description: 'Real-time weather app using OpenWeather API.',
      tech: ['JavaScript', 'REST API', 'CSS'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];
}