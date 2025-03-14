import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-third",
  imports: [CommonModule],
  templateUrl: "./third.component.html",
  styleUrl: "./third.component.css",
})
export class ThirdComponent {
  items = Array.from({ length: 8 }).map(() => ({
    image: "https://gh110919.github.io/megadeal-angular/Rectangle 10.png",
    title: "Motorolla Razer V3 Motorolla Razer V3",
    price: "1499 ₽",
    place: "г. Тольяти, Самарская область",
  }));
}
