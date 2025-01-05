import { Component } from '@angular/core';
import { BotService  as TelegramService} from '../../Shared/bot.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  avatarSvg!: SafeHtml;

  user: any;
  chat: any;
  startParam: string | null = null;
  authDate: string | null = null;
  submitted: boolean = false;

  constructor(private sanitizer: DomSanitizer,private telegramService: TelegramService) {}

  ngOnInit(): void {
   this.user = this.telegramService.getUserInfo();
    this.chat = this.telegramService.getChatInfo();
    this.startParam = this.telegramService.getStartParam();
    const authDateTimestamp = this.telegramService.getAuthDate();
    if (authDateTimestamp) {
      this.authDate = new Date(authDateTimestamp * 1000).toLocaleString();
    }
  }

}
