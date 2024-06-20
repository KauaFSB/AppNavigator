import { Image, StyleSheet, Text, View } from "react-native";

export default function EquipeScreen(props) {
    return (
        <View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
            <Text style={estilos.titulo}>EQUIPE</Text>
            <Text style={estilos.titulo}>CONHEÇA NOSSA EQUIPE</Text>

            <Text>
Bem-vindo à nossa equipe, onde a paixão pelo que fazemos se reflete em cada membro que a compõe. Nós somos um grupo diversificado de profissionais dedicados, unidos pela missão de oferecer a melhor experiência possível aos nossos usuários.
Nossa Missão: Trabalhamos incansavelmente para criar conteúdos e serviços que inspiram, informam e fazem a diferença na vida de nossos visitantes. Nosso compromisso com a excelência e a inovação nos impulsiona todos os dias.
Quem Somos: Desde especialistas técnicos a criativos visionários, nossa equipe é formada por indivíduos talentosos com habilidades diversas. Valorizamos a colaboração, a criatividade e o pensamento crítico, garantindo que cada projeto seja uma representação autêntica de nossos valores e visão.
Nosso Compromisso: Estamos aqui para você. Nossos esforços são guiados pela busca constante de melhorias e pela resposta às necessidades de nossa comunidade de usuários. Cada membro da nossa equipe está comprometido com a qualidade, a integridade e a inovação em tudo o que fazemos.
Conecte-se Conosco: Explore nossos perfis individuais para conhecer melhor os rostos por trás dos nossos serviços. Estamos sempre abertos ao feedback e às suas sugestões. Juntos, podemos moldar o futuro e criar experiências que importam.
Junte-se a nós nesta jornada emocionante. Nossa equipe está aqui para transformar ideias em realidade e proporcionar uma experiência excepcional a cada interação. Obrigado por fazer parte da nossa comunidade.

</Text>
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
    }
})