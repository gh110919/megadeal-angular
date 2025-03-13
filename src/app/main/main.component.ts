import { Component } from "@angular/core";
import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";
import { ThirdComponent } from "../third/third.component";
import { FourthComponent } from "../fourth/fourth.component";

@Component({
  selector: "app-main",
  imports: [FirstComponent, SecondComponent, ThirdComponent, FourthComponent],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {}
