import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { ScrollToTop } from './scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ScrollToTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio';
}