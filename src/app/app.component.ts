import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/layout/menu/menu.component";
import { FooterComponent } from './components/layout/footer/footer.component';
import { SignalEjemplo1Component } from './components/signal-ejemplo1/signal-ejemplo1.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            MenuComponent, 
            FooterComponent,
            SignalEjemplo1Component
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 
}
