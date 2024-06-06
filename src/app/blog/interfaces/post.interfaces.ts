export interface Posts {
  usuario: Usuario[];
  posts:   Post[];
}

export interface Post {
  usuarioid: number;
  fecha:     string;
  categoria: string;
  Titulo:    string;
  post:      string;
}

export interface Usuario {
  id:      number;
  usuario: string;
  email:   string;
}
