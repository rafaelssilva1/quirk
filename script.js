// ADD TEXT FROM SERVICES

const words = document.querySelector(".words")
const servicos = ["design gráfico", "identidade visual", "websites"]
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
  isEnd = false
  words.innerHTML = currentPhrase.join('')

  if (i < servicos.length) {

    if (!isDeleting && j <= servicos[i].length) {
      currentPhrase.push(servicos[i][j])
      j++
      words.innerHTML = currentPhrase.join('') + "|"
    }

    if(isDeleting && j <= servicos[i].length) {
      currentPhrase.pop(servicos[i][j])
      j--
      words.innerHTML = currentPhrase.join('') + "|"
    }

    if (j == servicos[i].length) {
      isEnd = true
      isDeleting = true
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if (i === servicos.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (100 - 80) + 50
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()
