import { Component } from '@angular/core';
import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";

@Component({
  selector: 'app-main',
  imports: [FirstComponent, SecondComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
