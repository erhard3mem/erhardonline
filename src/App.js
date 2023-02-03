import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';



class App extends Component{
  state = {
    viewText1: false,
    viewText2: false
  }

  render(){ 
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header-p">Erhard Einsiedler online.</p>



        <a className="App-link" href="#" onClick={()=>{this.setState({viewText1:true})}}
        >Traktat über neoliberale Informationsdiktatur lesen.</a><br />
          {this.state.viewText1 && <div className="div-tract">

<p>Seit in den Medien die sozialen Netzwerke ihren Hochflug gelandet haben, sprich sich als Äquivalenzprodukt zu alteingedienten Kommunikationskanälen wie SMS etabliert haben, ufert der Mensch seiner dem freien Geist üblichen Schwerelosigkeit weniger nach. Damit ist gemeint, dass er sich bis in den Tod an gewisse Medienschnittstellen bindet, die es früher nie gegeben hat, und man unreflektiert wie sich das eben entwickelt hat, auch noch mit Formularen des Unternehmens nach verfügen muss, was mit all den Dateneinheiten die Information darstellen und vom Verstorbenen in das System eingespeist wurden.</p>
<p>Der Mensch hat sich ein Produktlabyrinth geschaffen, mit dem er sich selbst digital verkörpern will oder uneben sich selbst digital finden will. Doch die Mathematik hinter dem System des Digitalen ist eine total vom Menschen künstlich geschaffene Erfindung, die technisch gesehen eine nur auf den physikalischen Naturgesetzen basierende Erklärung finden kann. Insofern ist der Versuch seiner seelischen Transformation auf dieser Ebene nichts anderes als der überholte Versuch, Leonardo da Vincis vitruvianischen Menschen ohne Körper nachzubilden, denn ein Computerprogramm hat keinen Körper, der in der Natur normal vorkommt.</p>
<p>Für das Smartphone gibt es mittlerweile drei große Softwareanwendungen, die gemeinsam mit dem Computer einen Ersatz für das mobile Kommunikationsprotokoll SMS mit dem Versprechen einer anonymen Sphäre (Verschlüsselung) anbieten wollen. Signal, Telegram und WhatsApp. Letzteres gehört zum großen Meta-Konzern, der wiederum Facebook entwickelt, das größte soziale Netzwerk der Welt. Szene1, MySpace, Google+, Mastadon, Twitter sind Alternativen. Sofern wir keine Harmonie mit unserer echten Umwelt oder ein gesundes Freizeit-Konsum-Verhältnis finden, werden wir untergehen.</p>
<p>Wie ich in meiner rechtswissenschaftlichen<a href="https://epub.jku.at/obvulihs/content/titleinfo/5833126?query=Erhard%20Einsiedler">Diplomarbeit</a> dargestellt habe, hat ein zu großes Netzwerk eine sehr hohe Wechseldynamik seiner Systemelemente zur Folge. Dies lässt sich am Beispiel Facebook zeigen, das von nun an Teil des Meta-Netzwerkes ist, und somit auch Meta genannt wird. Google+ hat es hingegen nie geschafft, über die Reißleine hinweg Netzwerkkapazitäten einzunehmen, die den Marktanteil von Meta-Facebook bedroht hätten. Vielleicht liegt dies an der geschickten Marketingstrategie, die hinter dem Projekt, seit es kommerzielle Bahnen angenommen hat, steckt.</p>


          </div>}
          <a className="App-link" href="#" onClick={()=>{this.setState({viewText2:true})}}
          >Read tract about man as high animal.</a>
          {this.state.viewText2 && <div className="div-tract">

<p>If one looks at the interactions of our society under the microscope of causality, one would come to the conclusion that also the title of the tract is wrong.</p>
<p>The human being is free on all levels, as far as the surrounding social structures permit it, in decision about nutrition habit, education habit and life habit in general. If one looks at the media economy, in particular the relationship between education and consumption, one finds oneself even in a democratic Pluto Idiocracy. By this is meant that the meaning of our political society is the participation of everyone, without admitting that the one with money rules over the masses of idiocrats who are not interested in art and culture, preferring instead commerce, mass media and pop culture. </p>
<p>Our Western society has soon reached the second limit of growth. Today we have reached a degree of individualization, especially on the technical level, that can no longer be described as democratic, if the comparison is meaningful: a machine that produces proportionally more environmentally harmful product than its user manages to work off in the course of the machine's lifetime is not ready for consumption. In particular, I would like to allude here to the development of digital smartphones and their Internet connection. The Internet is a part of our culture and cannot be done away with for the sake of environmental protection. But the implementation of the individualization of technology is definitely a criticizable part of its implementation process over the years. One could say that this point is already the technological singularity itself. </p>
<p>As far as progress has brought us, more people now trust digital cryptocurrencies and their technology than there are critics about it. Skepticism is more necessary than interest-based consensus in such a crisis-prone time. Especially if you follow the requirements. Of course, there are certain scenarios in which the "running system" can be eliminated, but these tend to be exceptions, because if one reflects on the steps a state has to take until it has allowed a technology to be implemented that permits anonymous payments without posing a danger to itself, also in terms of environmental protection. In conclusion, cryptocurrency is not sustainable.</p>
<p>Governments want to ban internal combustion engines on sale in Austria by 2025. This could be a wrong track, because if you consider the incidental costs in production (and development) that an e-car has to bear in addition, you have not achieved any savings for the climate or the environment.</p>
          
          </div>}

      <p className="header-p">Projects</p>
      <ul>
        <li><a className="App-link" href="https://youtube.com/shorts/elXJKTpL8nM?feature=share">Snake game for Monome in Python (YouTube)</a></li>
        <li><a className="App-link" href="https://soundcloud.com/erhardtres">Music from Monome Grid 64 and Max 7</a></li>
        <li><a className="App-link" href="https://www.flickr.com/photos/190916025@N06/albums">Photography shared online</a></li>
      </ul>

      </header>
    </div>    
   );

  }
}

export default App;