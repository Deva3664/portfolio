import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound implements OnInit, OnDestroy {
  glitchText = '404';
  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.glitchText = Math.random() > 0.5 ? '404' : '4Ø4';
    }, 200);

    setTimeout(() => {
      clearInterval(this.interval);
      this.glitchText = '404';
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}