import React, {Fragment} from 'react';
import './App.css';
import {
    Page,
    Text,
    Image,
    View,
    Document,
    StyleSheet,
    Font
} from '@react-pdf/renderer'

const ref = React.createRef();
const canvasRef = React.createRef();

const Boleta = ({cliente, dni}) => {

    Font.register(
        {family: 'Oswald', src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'}
    );

    Font.register({family: 'Arial Black', src: './fonts/ArialBlack.ttf'});

    Font.register({family: 'Arial', src: './fonts/Arial.ttf'});

    Font.register({family: 'Arial Bold', src: './fonts/ArialBold.ttf'});

    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            flexDirection: 'colum',
            //backgroundColor: '#E4E4E4',
            flexWrap: 'wrap',
            fontFamily: 'Arial'
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        original: {
            border: 1,
            padding: 8,
            textAlign: 'center',
            fontSize:15
        },
        c: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: -175
        },
        c2: {
            width: 70,
            border: 2,
            backgroundColor: 'white',
            textAlign: 'center',
            padding: 5
        },
        logo: {
            border: 1,
            flex: 1,
            padding: 10,
        },
        imgLogo: {
            width: 230,
            marginTop: 20,
            marginLeft:10

        },
        divFactura: {
            border: 1,
            flex: 1,
            padding: 10
        },

        text: {
            fontSize: 12,
            paddingTop: 3
        },

        encabezadoCliente:{
          flexDirection:'row',
          justifyContent: 'space-around',
          border:1,
          marginTop: 300,
          paddingTop:10,
          paddingBottom:10
        }

    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.original}>
                    <Text>ORIGINAL</Text>
                </View>

                <View style={styles.row}>

                    <View style={styles.logo}>
                        <Image style={styles.imgLogo} src='./img/logofibro.png'></Image>

                        <View style={{marginTop:9}}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop:8
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  Razon Social:
                            </Text>
                            <Text style={[styles.text,{marginLeft:2, marginTop:2, fontSize:10}]}>FARIAS MATIAS ALEJANDRO FRANCISCO</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop:8
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  Domicilio Comercial:
                            </Text>
                            <Text style={[styles.text,{marginLeft:2, marginTop:2, fontSize:10}]}>Polonia 448, Jose C. Paz, Bs.As.</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingTop:8
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  Condicion Frente al IVA:
                            </Text>
                            <Text style={[styles.text,{marginLeft:2}]}>Responsable Monotrbuto</Text>
                        </View>
                        </View>

                    </View>



                    <View style={styles.divFactura}>
                        <Text
                            style={[{
                                    marginTop: 20,
                                    textAlign: 'center',
                                    fontSize: 20,
                                    marginBottom: 10,
                                    fontFamily: 'Arial Black'
                                }
                            ]}>
                              FACTURA
                          </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>Punto de Venta:
                            </Text>
                            <Text
                                style={[
                                    styles.text, {
                                        marginRight: 30
                                    }
                                ]}>0002</Text>

                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>Comp. Nro:
                            </Text>
                            <Text style={styles.text}>00000000</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  Fecha de Emision:
                            </Text>
                            <Text style={[styles.text,{marginLeft:2}]}>09/08/2020</Text>
                        </View>
                      <View style={{marginTop:10}}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  CUIT:
                            </Text>
                            <Text style={[styles.text,{marginLeft:2}]}>20394132064</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  Ingregos Brutos:
                            </Text>
                            <Text style={[styles.text,{marginLeft:2}]}>20394132064</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  Fecha de Inicio de Actividades:
                            </Text>
                            <Text style={[styles.text,{marginLeft:2}]}>21/08/2019</Text>
                        </View>
                        </View>
                    </View>
                </View>

                <View style={styles.c}>
                    <View style={styles.c2}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'Arial Black'
                            }}>C</Text>
                        <Text
                            style={{
                                fontSize: 10
                            }}>COD. 011</Text>
                    </View>
                </View>
                
                    <View style={styles.encabezadoCliente}>
                    <View>
                      <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start'
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  DNI/CUIT:
                            </Text>
                              <Text style={[styles.text,{marginLeft:2}]}>{dni}</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginTop: 5
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  IVA: 
                            </Text>
                            <Text style={[styles.text,{marginLeft:2}]}>Consumidor Final</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                marginTop: 5
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  Condicion de Venta: 
                            </Text>
                            <Text style={[styles.text,{marginLeft:2}]}>Mercado Libre</Text>
                        </View>

                          
                      </View>

                      

                      <View >
                      <View
                            style={{
                                flexDirection: 'colum',
                                justifyContent: 'flex-start'
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold'
                                    }
                                ]}>
                                  Nombre y Apellido / Razon Social
                            </Text>
                              <Text style={[styles.text,{marginLeft:2}]}>{cliente}</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'colum',
                                justifyContent: 'flex-start'
                            }}>
                            <Text
                                style={[
                                    styles.text, {
                                        fontFamily: 'Arial Bold',
                                        marginTop: 5
                                    }
                                ]}>
                                  Domicilio 
                            </Text>
                            <Text style={[styles.text,{marginLeft:2}]}>Polonia 448, Jose C Paz, Buenos Aires</Text>
                        </View>
                      </View>
                    </View>

                
                
                

            </Page>
        </Document>
    );
};

export default Boleta;
