import { Image, StyleSheet, Text, View } from "react-native";

export default function ContatoScreen(props) {
    return (
        <View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
            <Text style={estilos.titulo}>CONTATO</Text>

            <Text style={estilos.titulo}>FALE CONOSCO</Text>
            <Text>contato@funbbe.br</Text>
            <Text>(14) 3641-2100</Text>
            <Text>(14) 3641-9711</Text>

            <Text style={estilos.titulo}>LOCALIZAÇÃO</Text>
            <Text>Rua João Gerin, Nº 275 – Vila Operária Barra Bonita | 17340-190 | São Paulo, Brasil.</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 23,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    subtitulo: {
        fontWeight: "bold",
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})