import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./User/product/product.component";
import { HomeComponent } from "./User/home/home.component";
import { AvtarComponent } from "./User/avtar/avtar.component";
import { UserLayoutComponent } from "./User/user-layout/user-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, HomeComponent, AvtarComponent, UserLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
