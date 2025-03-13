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
      img: "/MacBook Pro 16-inch Space Black Portrait.png",
    },
    {
      text: "Смартфоны и планшеты",
      img: "/iPhone 14 Pro Mockup Space Black.png",
    },
    { text: "Аудиотехника", img: "/q03 1.png" },
    { text: "Видеотехника", img: "/q06 1.png" },
    { text: "Фототехника", img: "/q05 1.png" },
    { text: "Печатная техника", img: "/q07 1.png" },
    { text: "Бытовая техника", img: "/q08 1.png" },
  ];
}
