import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatlistComponent } from './modules/chatlist/chatlist.component';
import { ChatComponent } from './modules/chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatlistComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WebChat';
}
