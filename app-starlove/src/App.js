import React, { Component } from 'react'
import Intro from './components/intro.js'
import introText from './intro-text.txt'
import Cockpit from './components/cockpit.js'
import HandleQuestion from './components/questions.js'
import ShowBitch from './components/yourbitch.js'
import MoneyMoneyMoney from './components/moneyMoneyMoney.js'
import HandleChat from './components/chatbot.js'
import ShowSpecialSelection from './components/special-selection.js'
import ShowSelection from './components/yourselection.js'

class App extends Component {
  state = {
    introIsPlaying: true,
    introText: 'loading',
    status: '',
    characters: [],
    currentStep: 0,
    currentList: [],
    questions: [
      {
        text: `T'aimes les poils ?`,
        yes: `SURE`,
        no:`NO WAY`,
        ifyes: list => list.filter(c => c.species !== 'droid'),
        ifno: list => list.filter(c => c.species === 'droid'
          || c.species === 'rodian'
          || c.species === 'hutt'
          || c.species === 'yoda\'s species'
          || c.species === 'trandoshan'
          || c.species === 'gungan')
      },
      {
        text: `T'es un petit vilain ?`,
        yes: `Un chouillat...`,
        no:`Non, je suis pur`,
        ifyes: list => list.filter(c => c.affiliations.includes('Sith')
          || c.affiliations.includes('Galactic Empire')),
        ifno: list => list.filter(c => !c.affiliations.includes('Sith')
          && !c.affiliations.includes('Galactic Empire'))
      },
      {
        text: `Tu veux du solide ?`,
        yes: `Je préfère, merci`,
        no:`J'aime les petits joueurs`,
        ifyes: list => list.sort((a, b) => b.mass - a.mass).slice(2),
        ifno: list => list.sort((a, b) => a.mass - b.mass).slice(2)
      }
    ],
    trainer:
      {
      name: 'Akaboobs',
      height: 3,
      mass: 'A LOT',
      gender: 'men',
      speciality: 'regard de chaton',
      image: 'https://image.noelshack.com/fichiers/2018/20/5/1526608297-akabab.jpg'
      },
    credit: 0,
    chatLines: [
      {
        text: 'Tu viens d\'où?',
        choiceA: 'La France ! Ca reste le pays des 400 fromages.',
        choiceB: 'PAYS DE GALLE INDÉPENDAAAAAAAANT',
        choiceC: 'Je suis formateur à la Wild...',
      },
      {
        text: 'T\'es marié ?',
        choiceA: 'Oui je suis marié j\'ai des enfants et tout ça ...',
        choiceB: 'Non..Non..Je suis pas marié avec des enfants, je suis pas un détraqué.',
        choiceC: 'Non, je suis fan de Jean-Luc Lahaye.',
      },
      {
        text: 'Parle moi mal, ça m\'excite...!',
        choiceA: 'Jacques a dit a dit pas de charcuterie !',
        choiceB: 'Shut up ! Kiss my ass !',
        choiceC: '<?php echo \'<p>Hello world</p>\'; ?>',
      },
      {
        text: 'Ca te plairait de venir me rejoindre ...?',
        choiceA: 'À l\'occasion, je vous mettrai un petit coup de polish',
        choiceB: 'Vous avez bien une amicale des anciens nazis ?',
        choiceC: 'Elle est où la poulette ?',
      },
      {
        text: 'Quel est ton pêché mignon ?',
        choiceA: 'J\'aime quand on m\'enduit d\'huile...',
        choiceB: 'Je démonte une poule et j\'envoie un fax à Noël Mamère',
        choiceC: '*hennissement/sueurs*',
      },
      {
        text: 'Partage moi un petit secret ...',
        choiceA: 'Je suis une gigantesque tarlouze',
        choiceB: 'J\'aime me beurrer la biscotte',
        choiceC: 'Je mets une moustache dans mon slip et je viole Cendrillon',
      },
      {
        text: 'Dis moi, c\'est quoi ton p\'tit nom ?',
        choiceA: 'Hubert bonisseur de la bath',
        choiceB: 'Jsuis pas une poukave',
        choiceC: 'Guy Georges',
      },
      {
        text: 'T\'as des maxi pecs?',
        choiceA: 'Bien sûr mon loup',
        choiceB: '*RespireINTENSÉMENTdansLeCombiné*',
        choiceC: 'Non mais j\ai la mini puissance',
      },
      {
        text: 'Je suis super X-iT... ;)',
        choiceA: 'Aime-moi tendre, aime-moi vrai',
        choiceB: 'Un engin comme vous, ça devrait être livré avec une notice !',
        choiceC: '*flop flop flop...*',
      },
      {
        text: 'Do you like to grab women by their pussies ?',
        choiceA: 'Donald ? Is this you ???',
        choiceB: 'Vous aimez les animaux madame ?',
        choiceC: 'MAIS TAIIIIISEZ-VOUS',
      },
      {
        text: 'T\'es bien membré mon chéri ?',
        choiceA: 'NaN',
        choiceB: 'Comme un wookie en rute',
        choiceC: 'Je crache sur le lama et je viole un pompier corse',
      },
      {
        text: 'Cuir ou moustache ?',
        choiceA: 'Je caresse un pompier et je pue du pull',
        choiceB: 'Pépito ou panini? Je prends la profiterole.',
        choiceC: 'J\'ai des mocassins à glands',
      },
      {
        text: 'Tu fais quoi ce soir... fais-moi envie',
        choiceA: 'Je m\'introduis chez Dark Vador et je mets du munster dans son casque',
        choiceB: 'Je mange une soutane et je tutoie David Charvet.',
        choiceC: 'Je savonne un scout et je suce une famille esquimaux.',
      },
    ],
    currentLine: 0
  }

  handleCall = () => {
    this.setState({ status: 'calling' })
  }

  hangUpCall = () => {
    clearInterval(this.counter)
    this.setState({ status: '', credit: 0, currentStep: 0, currentList: this.state.characters })
  }

  handleAnswer = filter => {
    this.setState({
      currentStep: this.state.currentStep + 1,
      currentList: filter(this.state.currentList)
    })
  }

  chooseBitch = bitch => {
    console.log('got it');
    this.setState({ status: 'chatting', currentList: bitch })
  }

  handleClientLine = () => {
    this.setState({
      currentLine: this.state.currentLine + 1,
    })
  }

  addCredit = () => this.setState({credit: this.state.credit += 1})
  counter = () => setInterval(this.addCredit, 1000)

  constructor() {
    super()
    fetch(introText)
      .then(r => r.text())
      .then(introTextValue => this.setState({ introText: introTextValue }))

    setTimeout(() => this.setState({ introIsPlaying: false }), 6000)

    /// fetch char
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res => res.json())
      .then(resJson => {
        this.setState({ characters: resJson, currentList: resJson })
      })
      .catch(console.error)
  }

  ['']() {}

  calling() {
    if (this.state.currentStep < this.state.questions.length) {
      return <HandleQuestion
        handleAnswer={this.handleAnswer}
        {...this.state.questions[this.state.currentStep]}/>
    }
    this.setState({ status: 'choosing' })
  }

  choosing() {
    return <div>
      <h2>2 matches !</h2>
      <ShowSelection chooseBitch={this.chooseBitch} character={this.state.currentList[0]} />
      <ShowSelection chooseBitch={this.chooseBitch} character={this.state.currentList[1]} />
      <h2>The outsider :</h2>
      <ShowSpecialSelection chooseBitch={this.chooseBitch} trainer={this.state.trainer} />
    </div>
  }

  chatting() {
    if (this.state.currentLine < this.state.chatLines.length) {
        this.counter()
        return <div>
          <MoneyMoneyMoney credit={this.state.credit} />
          <ShowBitch character={this.state.currentList} />
          <HandleChat handleClientLine={this.handleClientLine}
          {...this.state.chatLines[this.state.currentLine]} />
        </div>
      }
      clearInterval(this.counter)
      this.setState({ status: '', credit: 0 })
  }

  render() {
    if (this.state.introIsPlaying) return <Intro text={this.state.introText} />
    console.log(this.state.currentList)
    return (
      <div>
        <Cockpit handleCall={this.handleCall} hangUpCall={this.hangUpCall}/>
        {typeof this[this.state.status] === 'function'
          ? this[this.state.status]()
          : undefined}
      </div>
    )
  }
}

export default App;
