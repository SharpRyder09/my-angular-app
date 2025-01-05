import { Injectable } from '@angular/core';

// interface TelegramUser {
//   first_name: string;
//   last_name :string;
//   user_name : string;
//   // Add other properties you need from the user object, if applicable
// }

@Injectable({
  providedIn: 'root'
})
export class BotService {
  private tg: any;

  constructor() {
    // Initialize Telegram Web App SDK
    this.tg = window.Telegram.WebApp;
  }

  getUserInfo() {
    return this.tg.initDataUnsafe.user || null;
  }

  getChatInfo() {
    return this.tg.initDataUnsafe.chat || null;
  }

  getStartParam() {
    return this.tg.initDataUnsafe.start_param || null;
  }

  getAuthDate() {
    return this.tg.initDataUnsafe.auth_date || null;
  }

  // Optionally, you can add methods to send data back to Telegram or your backend
  sendData(data: any) {
    this.tg.sendData(JSON.stringify(data));
  }

  // Close the Web App
  close() {
    this.tg.close();
  }
}
