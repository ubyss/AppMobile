import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Texto from "../../componentes/Texto";

import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Topo from "./componentes/Topo";

const Cesta = ({ topo, detalhes, itens }) => {

    return (
        <>
            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Topo {...topo} />
                            <View style={estilos.cesta}>
                                <Detalhes {...detalhes} />
                                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                            </View>
                        </>
                    )
                }}
            />
        </>
    );
};

export default Cesta;

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        marginTop: 46,
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 20,
        lineHeight: 32
    },
});
