import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'albums',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'stopwatch',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'contact',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'bug',
      name: 'Botones',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
