import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interfaces';

@Component({
  selector: 'app-card-Post',
  templateUrl: './card-Post.component.html',
  styleUrls: ['./card-Post.component.css']
})
export class CardPostComponent implements OnInit {

  constructor( ) { }

  @Input()
  public post! : Post ;

  ngOnInit() {
    if(!this.post) throw Error('Post Property is required')
  }

}

