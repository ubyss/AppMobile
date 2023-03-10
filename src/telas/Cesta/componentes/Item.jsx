import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import Texto from "../../../componentes/Texto";

const Itens = ({ item: { nome, imagem } }) => {

  return (
    <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}></Image>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
)
};

export default Itens;

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignContent: 'center',
        borderBottomWidth: 1,
        borderColor: "#ECECEC",
        padding: 16
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
})
