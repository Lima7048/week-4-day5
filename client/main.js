
const form = document.getElementById('form')
const messageContainer = document.getElementById('message-container')
const baseURL = 'http://localhost:7777'

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  fetch('http://localhost:7777/messages',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
  if (response.ok) {
    console.log("(｡◕‿‿◕｡)")
  }
})

async function fetchMessages() {
  const mesaages = await fetch(`${baseURL}/messages`)
  let result = await messages.json()
  return result
}

async function getMessages() {
  let messages = await fetchMessages()
  messagecontainer.innerHTML = ''
  messages.forEach(message => {
    let h3Tag = document.createElement('h3')
    let pTag = document.createElement('p')
    let imgTag = document.createElement('img')
    let infoDiv = document.createElement(`div`)
    let logbook = document.createElement('div')


    h3Tag.textContent = name.form
    h3Tag.setAttribute('class', 'name')
    pTag.textContent = form.icon
    imgTag.src = form.imgURL


    infoDiv.appendChild(h3Tag)
    infoDiv.appendChild(pTag)
    messageCard.appendChild(imgTag)
    message - container.appendChild(logbook)

  })
}