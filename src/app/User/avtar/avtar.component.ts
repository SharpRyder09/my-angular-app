import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-avtar',
  standalone: true,
  imports: [],
  templateUrl: './avtar.component.html',
  styleUrls: ['./avtar.component.scss']
})
export class AvtarComponent {
  avatarSvg!: SafeHtml; // Non-null assertion

  constructor(private sanitizer: DomSanitizer) {
    this.generateRandomAvatar();
  }

  private generateRandomName(): string {
    const names = ['Alex'];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  generateRandomAvatar() {
    const randomName = this.generateRandomName();
    const svgCode = (window as any).multiavatar(randomName);
    this.avatarSvg = this.sanitizer.bypassSecurityTrustHtml(svgCode);
  }
}
