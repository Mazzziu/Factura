import React from "react";
import {
    Page,
    Text,
    Image,
    View,
    Document,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";
import moment from "moment";

Font.register({ family: "Arial Black", src: "./fonts/ArialBlack.ttf" });
Font.register({ family: "Arial", src: "./fonts/Arial.ttf" });
Font.register({ family: "Arial Bold", src: "./fonts/ArialBold.ttf" });

const Boleta = ({ datosFactura, qr }) => {
    //var paginas = ['ORIGINAL'];
    var tipo = "ORIGINAL";
    const COLOR_PRINCIPAL = "#AB5F5F";
    const URL_LOGO =
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/441/635/themes/common/logo-781526714-1615655564-d0adb210533f5ed73411f9acf0c47c3f1615655564.png?0";

    const styles = StyleSheet.create({
        page: {
            display: "flex",
            flexDirection: "colum",
            fontSize: 11,
            //backgroundColor: 'red',
            flexWrap: "wrap",
            padding: "1cm 1cm 1cm 1cm",
        },
        borde: {
            borderTop: 3,
            borderBottom: 3,
            padding: "5px 5px",
            borderColor: COLOR_PRINCIPAL,
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
        },
    });

    return (
        <Document>
            <Page key={tipo} size='A4' style={styles.page}>
                <View style={styles.borde}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <View>
                            <Image
                                style={{ height: "5cm" }}
                                src={URL_LOGO}
                            ></Image>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    padding: "20px 5cm 20px 20px ",
                                    backgroundColor: COLOR_PRINCIPAL,
                                    color: "white",
                                    margin: "auto",
                                }}
                            >
                                {datosFactura.cbteTipo.Desc}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: "10px",
                            fontSize: 10,
                            lineHeight: 1.5,
                        }}
                    >
                        <View style={{ width: "45%", textAlign: "left" }}>
                            <Text>Farias Matias Alejandro Francisco</Text>
                            <Text>IVA Responsable Inscripto</Text>
                            <Text>CUIT: 20394132064</Text>
                            <Text>Inicio de actividades: 21/08/2019</Text>
                        </View>

                        <View style={{ width: "50%", textAlign: "left" }}>
                            <Text>
                                Nombre/Razon social:
                                <Text style={{ fontFamily: "Arial Bold" }}>
                                    {" "}
                                    {datosFactura.nombre}
                                </Text>
                            </Text>
                            <Text>
                                {datosFactura.docTipo.Desc}:
                                <Text style={{ fontFamily: "Arial Bold" }}>
                                    {" "}
                                    {datosFactura.docNro}
                                </Text>
                            </Text>
                            <Text>
                                Fecha:
                                <Text style={{ fontFamily: "Arial Bold" }}>
                                    {" "}
                                    {moment(datosFactura.fecha).format(
                                        "DD/MM/YYYY"
                                    )}
                                </Text>
                            </Text>
                            <Text>
                                Provincia:
                                <Text style={{ fontFamily: "Arial Bold" }}>
                                    {" "}
                                    {datosFactura.provincia}
                                </Text>
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "10px",
                        }}
                    >
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                margin: "5px 5px",
                                fontFamily: "Arial Bold",
                                borderBottom: 1,
                            }}
                        >
                            <Text style={{ width: "1cm", paddingLeft: "1rem" }}>
                                #
                            </Text>
                            <Text style={{ width: "1cm", paddingLeft: "1rem" }}>
                                Id
                            </Text>
                            <Text style={{ width: "7cm", paddingLeft: "1rem" }}>
                                Descripcion
                            </Text>
                            <Text style={{ width: "1cm", paddingLeft: "1rem" }}>
                                Cant.
                            </Text>
                            <Text style={{ width: "2cm", paddingLeft: "2rem" }}>
                                Precio
                            </Text>
                            <Text style={{ width: "2cm", paddingLeft: "1rem" }}>
                                Neto
                            </Text>
                            <Text style={{ width: "1cm", paddingLeft: "1rem" }}>
                                IVA
                            </Text>
                            <Text style={{ width: "2cm", paddingLeft: "1rem" }}>
                                Subtotal
                            </Text>
                        </View>

                        {datosFactura.productos.map((item, pos) => (
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    margin: "5px 5px",
                                    borderBottom: 1,
                                    fontSize: 10,
                                }}
                                key={`row-${pos}`}
                            >
                                <Text
                                    style={{
                                        width: "1cm",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    {pos + 1}
                                </Text>
                                <Text
                                    style={{
                                        width: "1cm",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    {item.id}
                                </Text>
                                <Text
                                    style={{
                                        width: "7cm",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    {item.descripcion}
                                </Text>
                                <Text
                                    style={{
                                        width: "1cm",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    {item.cantidad}
                                </Text>
                                <Text
                                    style={{
                                        width: "2cm",
                                        paddingLeft: "2rem",
                                    }}
                                >
                                    $
                                    {new Intl.NumberFormat("es-AR").format(
                                        item.precio
                                    )}
                                </Text>
                                <Text
                                    style={{
                                        width: "2cm",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    $
                                    {new Intl.NumberFormat("es-AR").format(
                                        item.neto
                                    )}
                                </Text>
                                <Text
                                    style={{
                                        width: "1cm",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    {item.iva * 100}%
                                </Text>
                                <Text
                                    style={{
                                        width: "2cm",
                                        paddingLeft: "1rem",
                                    }}
                                >
                                    $
                                    {new Intl.NumberFormat("es-AR").format(
                                        item.subtotal
                                    )}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "auto",
                            height: "4cm",
                        }}
                    >
                        <View>
                            <Image
                                style={{
                                    width: "4cm",
                                    border: 1,
                                    borderColor: "gray",
                                }}
                                source={{ uri: qr }}
                            />
                        </View>
                        <View style={{ marginLeft: "10px" }}>
                            <Text>
                                Factura Nro:
                                <Text style={{ fontFamily: "Arial Bold" }}>
                                    {" "}
                                    {datosFactura.nroCmp}
                                </Text>
                            </Text>
                            <Text>
                                Pto. Venta Nro:
                                <Text style={{ fontFamily: "Arial Bold" }}>
                                    {" "}
                                    00005
                                </Text>
                            </Text>
                            <Text>
                                CAE:
                                <Text style={{ fontFamily: "Arial Bold" }}>
                                    {" "}
                                    {datosFactura.cae}
                                </Text>
                            </Text>
                            <Text>
                                Vto:
                                <Text style={{ fontFamily: "Arial Bold" }}>
                                    {" "}
                                    {datosFactura.caeVto}
                                </Text>
                            </Text>
                        </View>
                        <View
                            style={{
                                marginLeft: "auto",
                                fontSize: 15,
                                lineHeight: 1.5,
                            }}
                        >
                            <Text
                                style={{
                                    borderBottom: "1",
                                    marginBottom: "5px",
                                }}
                            >
                                TOTAL FACTURA
                            </Text>
                            <Text>
                                Importe neto: $
                                {new Intl.NumberFormat("es-AR").format(
                                    datosFactura.neto
                                )}
                            </Text>
                            <Text>
                                IVA: $
                                {new Intl.NumberFormat("es-AR").format(
                                    datosFactura.iva
                                )}
                            </Text>
                            <Text
                                style={{
                                    border: "1",
                                    fontFamily: "Arial Bold",
                                    fontSize: 18,
                                    padding: "5px",
                                }}
                            >
                                Total: $
                                {new Intl.NumberFormat("es-AR").format(
                                    datosFactura.total
                                )}
                            </Text>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default Boleta;
