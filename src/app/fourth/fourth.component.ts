import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-fourth",
  imports: [CommonModule],
  templateUrl: "./fourth.component.html",
  styleUrl: "./fourth.component.css",
})
export class FourthComponent {
  questions = Array.from({ length: 5 }).map(() => ({
    question: "Какой-то важный вопрос?",
  }));
}
