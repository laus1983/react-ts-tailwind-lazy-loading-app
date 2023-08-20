//Implementacion en el caso de que la libreria usada no posea los tipos para typescript.

declare module "lodash" {
  export function random(min: number, max: number): number;
}
