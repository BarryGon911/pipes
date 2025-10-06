import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ocultarInicio"
})

export class OcultarInicioPipe implements PipeTransform {
  transform(valor:string, cantidad:number): string | null {
    if (!valor || valor.length <= cantidad) {
      return "*".repeat(valor.length);
    }
    const parteVisible = valor.slice(-cantidad);
    return "*".repeat(cantidad)+parteVisible;
  }
}