const mapDiv = document.getElementById('main')

for(let i=1; i<4; i++){
  let child = document.createElement('div')
  child.id = 'box'
  child.className = i
  child.innerText = i
  mapDiv.appendChild(child)
}