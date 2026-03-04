import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  activeCategory = 'Frontend';

  categories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Angular', level: 70 },
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'Express', level: 60 },
        { name: 'MongoDB', level: 55 },
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 60 },
      ]
    }
  ];

  getActiveSkills() {
    const found = this.categories.find(c => c.name === this.activeCategory);
    return found ? found.skills : [];
  }

  setCategory(name: string) {
    this.activeCategory = name;
  }
}