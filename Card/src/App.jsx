import Card from "./components/Card"
import swPosterImg from "./assets/sw-poster.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"

export default function App() {
  return (
    <>
      <h1>Exercício 2</h1>
      <Card title="Pôster: Star Wars (1977)" poster={swPosterImg} conteudo={"Star Wars é uma das sagas mais icônicas da história do cinema, criada por George Lucas em 1977. Ambientada em uma galáxia distante, a franquia gira em torno da batalha entre o bem, representado pelos Jedi, e o mal, encarnado pelos Sith. No centro dessa luta está a família Skywalker, com personagens como Luke, Anakin e Leia, cujas histórias moldam o destino da galáxia. Além das épicas batalhas de sabres de luz e naves estelares, Star Wars explora temas profundos como redenção, sacrifício e a eterna luta entre a luz e as trevas"}/>
      <Card title="Pôster: Empire Strikes Back (1980)" poster={esbPosterImg}  conteudo={"Star Wars: The Empire Strikes Back (1980) é amplamente considerado um dos melhores filmes da saga Star Wars. Como a segunda parte da trilogia original, o filme aprofunda o conflito entre o Império Galáctico e a Aliança Rebelde. A história segue Luke Skywalker em sua jornada para se tornar um Jedi, enquanto treina com o mestre Yoda no planeta Dagobah. Paralelamente, Han Solo, Leia e seus aliados enfrentam a perseguição implacável de Darth Vader. O filme é lembrado por seu tom mais sombrio e por um dos maiores momentos da história do cinema: a revelação de que Darth Vader é o pai de Luke."}/>
      <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPosterImg} conteudo={"Star Wars: Return of the Jedi (1983) conclui a trilogia original com uma batalha épica entre o bem e o mal. O filme acompanha Luke Skywalker enquanto ele tenta resgatar Han Solo das garras de Jabba the Hutt e enfrenta seu destino final de confrontar Darth Vader e o Imperador Palpatine. Enquanto isso, a Aliança Rebelde se prepara para destruir a segunda Estrela da Morte. No desfecho emocionante, Luke busca redimir seu pai, Anakin Skywalker, que retorna ao lado da luz em um ato de sacrifício. Return of the Jedi celebra a vitória da esperança e da redenção, trazendo um fim triunfante à saga da família Skywalker."}/>
    </>
  )
}