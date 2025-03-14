import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  buttons = [
    {
      img: "https://gh110919.github.io/megadeal-angular/Vector (1).svg",
      link: "https://wa.me",
    },
    {
      img: "https://gh110919.github.io/megadeal-angular/Path-3.svg",
      link: "https://t.me",
    },
    {
      img: "https://gh110919.github.io/megadeal-angular/Vector (2).svg",
      link: "https://vk.com",
    },
    {
      img: "https://gh110919.github.io/megadeal-angular/Guides.svg",
      link: "https://viber.com",
    },
  ];
}
