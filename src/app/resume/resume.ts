import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  year: string;
  title: string;
  place: string;
  description: string;
  type: 'education' | 'experience';
}

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {
  activeTab: 'education' | 'experience' = 'education';

  timeline: TimelineItem[] = [
    {
      year: '2023 - 2027',
      title: 'B.Tech Computer Science',
      place: 'ABDUL KALAM TECHNICAL UNIVERSITY',
      description: 'Studying core CSE concepts, web development, data structures and algorithms.',
      type: 'education'
    },
    {
      year: '2020 - 2022',
      title: 'Higher Secondary (12th)',
      place: 'INTERNATIONAL HINDU SCHOOL',
      description: 'Completed with focus on Physics, Chemistry and Mathematics.',
      type: 'education'
    },
    {
      year: '2024',
      title: 'Frontend Developer Intern',
      place: 'Some Company',
      description: 'Built responsive UI components, worked with REST APIs and collaborated with design team.',
      type: 'experience'
    },
    {
      year: '2023',
      title: 'Freelance Web Developer',
      place: 'Self Employed',
      description: 'Designed and developed portfolio websites for clients using HTML, CSS and JavaScript.',
      type: 'experience'
    }
  ];

  getFiltered() {
    return this.timeline.filter(item => item.type === this.activeTab);
  }
}