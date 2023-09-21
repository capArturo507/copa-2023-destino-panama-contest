export const parseJSON = (value: string) => JSON.parse(value);

export const configurarAlerta = (tipo: App.TipoAlerta, mensaje: string): App.Alerta => {
	return {
		tipo,
		mensaje
	};
};
