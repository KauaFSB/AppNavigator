import { Image, StyleSheet, Text, View } from "react-native";

export default function SobreScreen(props) {
    return (
        <View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
            <Text style={estilos.titulo}>SOBRE</Text>
            <Text style={estilos.titulo}>SOBRE A NOSSA ESCOLA</Text>

            <Text>Bem-vindo à FUNBBE, uma instituição dedicada à educação de excelência e ao desenvolvimento integral de seus alunos desde 1963. Localizada na Rua João Gerin 275, a FUNBBE orgulha-se de sua trajetória de mais de 60 anos no cenário educacional, promovendo um ambiente acolhedor e propício ao aprendizado.
Nosso Compromisso Educacional: Na FUNBBE, acreditamos que cada aluno é único e merece uma educação que respeite suas individualidades. Nossa equipe de educadores qualificados está empenhada em proporcionar um ensino de qualidade, estimulando o pensamento crítico, a criatividade e a ética em nossos estudantes.
Infraestrutura Moderna: Contamos com instalações modernas e recursos tecnológicos atualizados, garantindo um ambiente seguro e propício ao aprendizado. Nossas salas de aula são equipadas com tecnologia de ponta para apoiar o ensino e a aprendizagem em todas as disciplinas.
Valores Fundamentais: A FUNBBE baseia-se em valores sólidos como respeito, responsabilidade, empatia e integridade. Esses princípios orientam nossas práticas pedagógicas e fortalecem o senso de comunidade entre alunos, pais e colaboradores.
Extracurriculares e Atividades: Além do currículo acadêmico robusto, oferecemos uma variedade de atividades extracurriculares que enriquecem a experiência educacional de nossos alunos. Desde esportes até clubes acadêmicos, há oportunidades para todos os interesses e talentos.
Parceria com a Família: Reconhecemos a importância da parceria entre escola e família no desenvolvimento dos alunos. Encorajamos a participação ativa dos pais na vida escolar de seus filhos, promovendo um ambiente colaborativo e de apoio mútuo.
Venha Conhecer a FUNBBE: Estamos sempre abertos para receber novos alunos e suas famílias. Agende uma visita para conhecer nossa escola, nossa equipe e nossos programas educacionais. Juntos, podemos proporcionar um futuro brilhante e promissor para nossos estudantes.</Text>
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