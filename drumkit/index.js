const kits = ["crash", "kick","snare", "tom"]

const containerEl = document.querySelector(".container")


kits.forEach(kit=>{
    const btnEl = document.createElement("button")
    btnEl.classList.add("btn")
    btnEl.innerText = kit
    containerEl.appendChild(btnEl)
    const audioEl =document.createElement("audio")
    audioEl.src = "audio/" + kit + ".mp3"
    containerEl.appendChild(audioEl)}

