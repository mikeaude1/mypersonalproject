import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements OnInit {
  myEmail: string = 'miguelaude@ymail.com';
  subject: string = 'Contacto desde mi portafolio';
  body: string = 'Hola, me gustaría ponerme en contacto contigo.';
  constructor() { }

  ngOnInit() {
  }

  openEmailOptions() {
    const mailtoLink = `mailto:${this.myEmail}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
    const outlookLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${this.myEmail}&subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${this.myEmail}&su=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;

    // Crear un popup simple con las opciones
    const popup = window.open("", "_blank", "width=300,height=200");
    if (popup) {
      popup.document.write(`
      <html>
      <head>
        <link rel="stylesheet" href="https://cdn.metroui.org.ua/v4/css/metro-all.min.css">
        <style>
          .email-option {
            display: flex;
            align-items: center;
            margin: 10px 0;
          }
          .email-option img {
            width: 32px;
            height: 32px;
            margin-right: 10px;
          }
        </style>
      </head>
      <body class="h-vh-100 bg-light p-4">
        <h5>Selecciona tu proveedor de correo:</h5>
        <div class="email-option">
          <img src="https://img.icons8.com/fluency/48/000000/email.png" alt="Default Mail">
          <a href="${mailtoLink}" class="button primary">Default Mail App</a>
        </div>
        <div class="email-option">
          <img src="https://img.icons8.com/color/48/000000/microsoft-outlook-2019.png" alt="Outlook">
          <a href="${outlookLink}" target="_blank" class="button primary">Outlook</a>
        </div>
        <div class="email-option">
          <img src="https://img.icons8.com/color/48/000000/gmail--v1.png" alt="Gmail">
          <a href="${gmailLink}" target="_blank" class="button primary">Gmail</a>
        </div>
      </body>
      </html>
    `);
    popup.document.close();
    }
  }

}
