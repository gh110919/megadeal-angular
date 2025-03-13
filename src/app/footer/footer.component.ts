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
      img: "/Vector (1).svg",
      link: "https://wa.me",
    },
    {
      img: "/Path-3.svg",
      link: "https://t.me",
    },
    {
      img: "/Vector (2).svg",
      link: "https://vk.com",
    },
    {
      img: "/Guides.svg",
      link: "https://viber.com",
    },
  ];
}
