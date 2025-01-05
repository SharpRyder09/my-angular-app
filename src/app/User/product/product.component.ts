import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { SharedmodulesModule } from '../../Shared/sharedmodules/sharedmodules.module';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SharedmodulesModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  username: string | null = null;

  counter: number = 0;

  constructor(private telegramService: ServiceService) {}
  
  ngOnInit(): void {
    console.log("okkkk");
    this.telegramService.getUserName().subscribe(data => {
      console.log("result", data);
      if (data && data.result) {
        this.username = data.result.first_name
        || 'No username available';
        console.log('Username:', this.username);
      }
    });
  }

  // Function to increase the counter
  increaseCounter(): void {
    this.counter += 1;
  }
}
