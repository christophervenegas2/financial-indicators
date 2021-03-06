export interface ValueChartData {
  version:       string;
  autor:         string;
  codigo:        string;
  nombre:        string;
  unidad_medida: string;
  serie:         Serie[];
}

export interface Serie {
  fecha: string;
  valor: number;
}
