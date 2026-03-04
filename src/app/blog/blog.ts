import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  date: string;
  readTime: number;
  tags: string[];
  summary: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  posts: BlogPost[] = [
    {
      title: 'Getting Started with Angular 17',
      date: 'Feb 10, 2025',
      readTime: 5,
      tags: ['Angular', 'TypeScript'],
      summary: 'A beginner friendly guide to Angular 17 and its new control flow syntax.',
      link: '#'
    },
    {
      title: 'CSS Grid vs Flexbox — When to use what',
      date: 'Jan 25, 2025',
      readTime: 4,
      tags: ['CSS', 'Layout'],
      summary: 'A practical breakdown of when to reach for Grid vs Flexbox in your layouts.',
      link: '#'
    },
    {
      title: 'Why TypeScript makes you a better developer',
      date: 'Jan 10, 2025',
      readTime: 6,
      tags: ['TypeScript', 'JavaScript'],
      summary: 'How TypeScript catches bugs before they happen and improves your workflow.',
      link: '#'
    }
  ];
}