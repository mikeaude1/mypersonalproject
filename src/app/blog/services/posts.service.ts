import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, Posts, Usuario } from '../interfaces/post.interfaces';
import {environments} from '../../../environments/environments'

@Injectable({
  providedIn: 'root'
})

export class PostsService {

private baseUrl:string = environments.baseUrl

constructor( private http: HttpClient ) { }


getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(`${this.baseUrl}/usuario`);
}
getPosts(): Observable<Post[]> {
  return this.http.get<Post[]>(`${this.baseUrl}/posts`);
}
}
