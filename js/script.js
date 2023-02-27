const customName = document.getElementById('customname')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.story')

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}


var storyText = 'Estava 34 graus lá fora, então :insertx: foi dar uma caminhada. Quando ele chegou :inserty:, ele começou a ficar aterrorizado por um momento, depois :insertz:. :João: viu tudo, mas não se surpreendeu - :insertx: pesava 136 kg e era um dia muito quente.'
var insertX = ['Willy, o Goblin', 'Papaizão', 'Papai Noel']
var insertY = ['na cozinha', 'na Disneyland', 'na Casa Branca']
var insertZ = ['explodiu espontaneamente', 'derreteu em uma poça na calçada', 'se transformou em uma lesma e rastejou para bem longe']



randomize.addEventListener('click', result)

function result() {
  const name = customName.value
  const newStory = storyText
  const xItem = randomValueFromArray(insertX)
  const yItem = randomValueFromArray(insertY)
  const zItem = randomValueFromArray(insertZ)
  story.style.visibility = 'visible';
  

  if (customName.value !== '') {
    const name = customName.value;
    name.toUpperCase()[0]
    
  }
  

  story.innerHTML = newStory.replace(/:inserty:/g, yItem).replace(/:insertx:/g, xItem).replace(/:insertz:/g, zItem).replace(/:João:/g, name[0].toUpperCase() + name.slice(1))
  
}

