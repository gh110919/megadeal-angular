import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-second",
  imports: [CommonModule],
  templateUrl: "./second.component.html",
  styleUrl: "./second.component.css",
})
export class SecondComponent {
  items = [
    {
      text: "Компьютеры и ноутбуки",
      img: "https://gh110919.github.io/megadeal-angular/MacBook Pro 16-inch Space Black Portrait.png",
    },
    {
      text: "Смартфоны и планшеты",
      img: "https://gh110919.github.io/megadeal-angular/iPhone 14 Pro Mockup Space Black.png",
    },
    {
      text: "Аудиотехника",
      img: "https://gh110919.github.io/megadeal-angular/q03 1.png",
    },
    {
      text: "Видеотехника",
      img: "https://gh110919.github.io/megadeal-angular/q06 1.png",
    },
    {
      text: "Фототехника",
      img: "https://gh110919.github.io/megadeal-angular/q05 1.png",
    },
    {
      text: "Печатная техника",
      img: "https://gh110919.github.io/megadeal-angular/q07 1.png",
    },
    {
      text: "Бытовая техника",
      img: "https://gh110919.github.io/megadeal-angular/q08 1.png",
    },
  ];
}
