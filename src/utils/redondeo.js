const redondeo = (numero, decimales) => {
    let x = "1";
    if (decimales !== null || decimales !== undefined) {
        for (let i = 0; i < decimales; i++) {
            x = x + "0";
        }
    }
    let numeroAumentado = Number(numero) * Number(x);
    let redondeo = Math.round(numeroAumentado);
    return redondeo / Number(x);
};

export default redondeo;
