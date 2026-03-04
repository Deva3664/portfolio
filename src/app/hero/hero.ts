import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  name = 'Devansh';
  role = 'Web Developer';
  roles = ['Frontend Developer', 'Angular Developer', 'UI/UX Enthusiast'];
  roleIndex = 0;
  charIndex = 0;

  ngOnInit() {
    this.typeRole();
  }

  typeRole() {
    const currentRole = this.roles[this.roleIndex];
    if (this.charIndex < currentRole.length) {
      this.role += currentRole[this.charIndex];
      this.charIndex++;
      setTimeout(() => this.typeRole(), 100);
    } else {
      setTimeout(() => this.eraseRole(), 1500);
    }
  }

  eraseRole() {
    if (this.role.length > 0) {
      this.role = this.role.slice(0, -1);
      setTimeout(() => this.eraseRole(), 50);
    } else {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.charIndex = 0;
      setTimeout(() => this.typeRole(), 500);
    }
  }
}