import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen(props) {
    return (
      <View style={estilos.container}>
        <Image
        style={{ height: 50, width: 100 }}
          source={{
            uri: 'https://funbbe.br/wp-content/uploads/2023/01/Sem-nome-1920-%C3%97-900-px-5.png',
          }}
        />
        <Text style={estilos.titulo}>SEJA BEM-VINDO A FUNBBE!</Text>
  

          {/*Inicio da imagem*/}
        <Image
        style={{ height: 200, width: 200, display: "flex", alignItems: "center", justifyContent: "center"}}
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20240218/original/pngtree-3d-kids-go-to-school-vector-transparent-background-png-image_14353716.png',
          }}
         /> 
         {/*Fim da imagem*/}

         <Text style={estilos.titulo}>A MELHOR ESCOLA</Text>
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
        fontSize: 23
    }
  })