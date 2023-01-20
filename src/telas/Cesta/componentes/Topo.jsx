import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";
import cesta from "../../../mocks/cesta";

const width = Dimensions.get('screen').width

const Topo = ({titulo, images}) => {
  return (
    <>
      <Image source={images.logoBanner} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
};

export default Topo;

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
        fontFamily: 'MontserratBold',
        marginTop: 0,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        padding: 16,
        top: 20
    }
})