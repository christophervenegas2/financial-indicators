export interface ProgressChartData {
  version:           string;
  autor:             string;
  fecha:             Date;
  uf:                Bitcoin;
  ivp:               Bitcoin;
  dolar:             Bitcoin;
  dolar_intercambio: Bitcoin;
  euro:              Bitcoin;
  ipc:               Bitcoin;
  utm:               Bitcoin;
  imacec:            Bitcoin;
  tpm:               Bitcoin;
  libra_cobre:       Bitcoin;
  tasa_desempleo:    Bitcoin;
  bitcoin:           Bitcoin;
}

export interface Bitcoin {
  codigo:        string;
  nombre:        string;
  unidad_medida: UnidadMedida;
  fecha:         Date;
  valor:         number;
}

export enum UnidadMedida {
  Dólar = "Dólar",
  Pesos = "Pesos",
  Porcentaje = "Porcentaje",
}
