var original = document.getElementById('original')
var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var box3 = document.getElementById('box3')
var box4 = document.getElementById('box4')
var target1 = document.getElementById('target1')
var target2 = document.getElementById('target2')

box1.addEventListener('dragstart', (e) =>e.dataTransfer.setData('text','box1'))
box2.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','box2'))
box3.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','box3'))
box4.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','box4'))

target1.addEventListener('dragover', (e) => e.preventDefault())

target1.addEventListener('drop',(e) => {
    var id = e.dataTransfer.getData('text')
    var element = document.getElementById(id)
    target1.appendChild(element)
})

box1.addEventListener('dblclick',() =>{
    original.appendChild(box1)
})
box2.addEventListener('dblclick',() =>{
    original.appendChild(box2)
})
box3.addEventListener('dblclick',() =>{
    original.appendChild(box3)
})
box4.addEventListener('dblclick',() =>{
    original.appendChild(box4)
})

var sound = document.getElementById('sound')
var image = document.getElementById('image')
var image2 = document.getElementById('image2')
var container_box = document.getElementById('container_box')

image.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','image'))
image2.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','image2'))

container_box.addEventListener('dragover', (e) => e.preventDefault())

container_box.addEventListener('drop',(e) => {
    var id = e.dataTransfer.getData('text')
    var element = document.getElementById(id)
    container_box.appendChild(element)
})

image.addEventListener('dblclick',() =>{
    sound.appendChild(image)
})
image2.addEventListener('dblclick',() =>{
    sound.appendChild(image2)
})



var world = document.getElementById('world')
var image3 = document.getElementById('image3')
var image4 = document.getElementById('image4')
var image_nature = document.getElementById('image_nature')
var nature = document.getElementById('nature')

image3.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','image3'))
image4.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','image4'))

nature.addEventListener('dragover', (e) => e.preventDefault())
nature.addEventListener('drop',(e) => {
    var id = e.dataTransfer.getData('text')
    var element = document.getElementById(id)
    nature.appendChild(element)
})

image3.addEventListener('dblclick',() =>{
    world.appendChild(image3)
})
image4.addEventListener('dblclick',() =>{
    world.appendChild(image4)
})

var cont_mix = document.getElementById('cont_mix')
var red = document.getElementById('red')
var green = document.getElementById('green')
var brown = document.getElementById('brown')
var plus = document.getElementById('plus')
var equal = document.getElementById('equal')
var div_mix = document.getElementById('div_mix')
var mix = document.getElementById('mix')



red.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','red'))
green.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','green'))
brown.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','brown'))
plus.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','plus'))
equal.addEventListener('dragstart', (e) => e.dataTransfer.setData('text','equal'))


mix.addEventListener('dragover', (e) => e.preventDefault())
mix.addEventListener('drop',(e) => {
    var id = e.dataTransfer.getData('text')
    var element = document.getElementById(id)
    mix.appendChild(element)
})

red.addEventListener('dblclick',() =>{
    cont_mix.appendChild(red)
})
green.addEventListener('dblclick',() =>{
    cont_mix.appendChild(green)
})
brown.addEventListener('dblclick',() =>{
    cont_mix.appendChild(brown)
})
plus.addEventListener('dblclick',() =>{
    cont_mix.appendChild(plus)
})
equal.addEventListener('dblclick',() =>{
    cont_mix.appendChild(equal)
})

