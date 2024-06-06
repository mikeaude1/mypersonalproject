import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public whatsappLink = `https://api.whatsapp.com/send?phone=6144069420&text=Hola, estoy interesado en trabajar con usted.`;
  title = 'myPersonalProject';
}
