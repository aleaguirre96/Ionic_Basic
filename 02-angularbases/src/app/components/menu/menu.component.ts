import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      nombre: 'Home',
      path: '/home'
    },
    {
      nombre: 'Contact',
      path: '/contact'
    },
    {
      nombre: 'About',
      path: '/about'
    },
    {
      nombre: 'Posts',
      path: '/posts'
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}
