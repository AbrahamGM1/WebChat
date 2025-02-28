import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  date = new Date();
  formattedDate:string = this.date.toLocaleString();

  chat_users = [{
    name:'Usuario 1',
    message: 'Este es un mensaje de prueba del primer usuario',
    date:this.formattedDate,
    messages:[
      {
        id:'receiver',
        message:'Este es un mensaje de prueba mandado por el receptor',
        date:this.formattedDate,
      },
      {
        id:'sender',
        message:'Este es un mensaje de prueba mandado por el emisor',
        date:this.formattedDate,
      },
      {
        id:'sender',
        message:'Este es un mensaje de prueba mandado por el emisor',
        date:this.formattedDate,
      },
      {
        id:'receiver',
        message:'Este es un mensaje de prueba mandado por el receptor',
        date:this.formattedDate,
      }
    ]
  },{
    name:'Usuario 2',
    message: 'Este es un mensaje de prueba del segundo usuario',
    date:this.formattedDate
  },{
    name:'Usuario 3',
    message: 'Este es un mensaje de prueba del tercer usuario',
    date:this.formattedDate
  },{
    name:'Usuario 4',
    message: 'Este es un mensaje de prueba del cuarto usuario',
    date:this.formattedDate
  }]

}
