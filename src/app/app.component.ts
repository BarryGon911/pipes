import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { OcultarInicioPipe } from "./ocultar-inicio.pipe";
import { InicialesPipe } from "./iniciales.pipe";

@Component({
  selector: "app-root",
  imports: [CommonModule, OcultarInicioPipe, InicialesPipe],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})

export class AppComponent {
  title = "pipes";

  contrasena: string = "miContraseña12345";

  nombresCompletos: string[] = [
    "Juan Camaney Shingón",
    "Esther Chequelete",
    "Gerson P. Lomo",
    "Alma María Rico",
    "Ximena Sariñoña",
    "Elber González"
  ];
  fechas: string[] = [
    "2025-01-01",
    "2025-02-14",
    "2025-03-21",
    "2025-04-30",
    "2025-06-17",
    "2025-12-24"
  ];
  sueldos: number[] = [
    15000,
    12345.5,
    9876,
    30000,
    18500.75,
    22000.9
  ];
}