

export const calcularEdad = (fechaNacimiento) => {
  const partesFecha = fechaNacimiento.split('-');
  if (partesFecha.length !== 3) {
    throw new Error('El formato de fecha debe ser "DD-MM-AAAA"');
  }

  const dia = parseInt(partesFecha[0]);
  const mes = parseInt(partesFecha[1]) - 1; // Restamos 1 ya que los meses en JavaScript se indexan desde 0 (enero = 0, febrero = 1, etc.).
  const anio = parseInt(partesFecha[2]);

  const fechaNacimientoDate = new Date(anio, mes, dia);
  const edadDif = Date.now() - fechaNacimientoDate.getTime();
  const edadFecha = new Date(edadDif);

  return Math.abs(edadFecha.getUTCFullYear() - 1970);
}


