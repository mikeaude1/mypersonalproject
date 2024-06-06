import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post, Usuario } from '../../interfaces/post.interfaces';

@Component({
  selector: 'app-list-Posts',
  templateUrl: './list-Posts.component.html',
  styleUrls: ['./list-Posts.component.css']
})
export class ListPostsComponent implements OnInit {
  posts: Post[] = [];
  usuarios: Usuario[] = [];
  usuariosMap: { [key: number]: string } = {}; // Objeto para mapear ID de usuario a nombre

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    }, error => {
      console.error('Error fetching posts', error);
    });

    this.postsService.getUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
      // Llenar el objeto de mapeo de usuarios
      this.usuarios.forEach(usuario => {
        this.usuariosMap[usuario.id] = usuario.usuario;
      });
    }, error => {
      console.error('Error fetching usuarios', error);
    });
  }

  // Método para obtener el nombre del usuario por su ID
  getNombreUsuario(id: number): string {
    return this.usuariosMap[id] || 'Desconocido';
  }
}
