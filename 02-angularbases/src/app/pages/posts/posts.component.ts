import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    console.log('INIT!');
    this.mensajes = this.dataService.getData();
    //.subscribe((posts: any[]) => {
    //  console.log(posts);
    //  this.mensajes = posts;
    //});

  }

  escucharClick( id: number ) {
    console.log('Click en post:', id);
  }

}
