import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-interaction';
  username = "Prasthuth"; 
  
  items = ['Check'];     

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  
}
