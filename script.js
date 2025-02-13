// Sparkles: default = hidden
const sparkles = []
const sparkle_1 = document.getElementById("R-star-1")
const sparkle_2 = document.getElementById("R-star-2")
const sparkle_3 = document.getElementById("L-star-1")
const sparkle_4 = document.getElementById("L-star-2")
const sparkle_5 = document.getElementById("L-star-3")

sparkles.push(sparkle_1, sparkle_2, sparkle_3, sparkle_4, sparkle_5)
function AddHide(element){
    element.classList.add('hide')
}

function RemoveHide(element){
    element.classList.remove('hide')
}

for(const sparkle of sparkles){
    AddHide(sparkle)
}

// Ears: Moves on click
const $earL = document.querySelector('.leftear');
const $earR = document.querySelector('.rightear');

function AddFlickLeft() {
    $earL.classList.add('moveEarLeft')
}
function RemoveFlickLeft() {
    $earL.classList.remove('moveEarLeft')
}

$earL.addEventListener('click', function(){
    AddFlickLeft()
    setTimeout(RemoveFlickLeft, 2050)
})

function AddFlickRight() {
    $earR.classList.add('moveEarRight')
}
function RemoveFlickRight() {
    $earR.classList.remove('moveEarRight')
}

$earR.addEventListener('click', function(){
    AddFlickRight()
    setTimeout(RemoveFlickRight, 2050)
})

// Flowers: Spin on click

const $flowersLayer = document.getElementById("flowers")
const $yellowFlower = document.getElementById("yellow-flower")
const $blueFlower = document.getElementById("blue-flower")
const $pinkFlower = document.getElementById("pink-flower-1")

function AddSpinYellow(element){
    element.classList.add('spin-yellow')
}
function RemoveSpinYellow(element){
    element.classList.remove('spin-yellow')
}

$yellowFlower.addEventListener('click', function(e){
    AddSpinYellow($yellowFlower)
    setTimeout(function(){
        RemoveSpinYellow($yellowFlower)
    }, 1000)
})

function AddSpinBlue(element){
    element.classList.add('spin-blue')
}
function RemoveSpinBlue(element){
    element.classList.remove('spin-blue')
}

$blueFlower.addEventListener('click', function(e){
    AddSpinBlue($blueFlower)
    setTimeout(function(){
        RemoveSpinBlue($blueFlower)
    }, 1000)
})

function AddSpinPink(element){
    element.classList.add('spin-pink')
}
function RemoveSpinPink(element){
    element.classList.remove('spin-pink')
}

$pinkFlower.addEventListener('click', function(e){
    AddSpinPink($pinkFlower)
    setTimeout(function(){
        RemoveSpinPink($pinkFlower)
    }, 1000)
})

// Pet the bunny!

const highlights = []
const highlight_1 = document.getElementById("R-sml-HL")
const highlight_2 = document.getElementById("L-sml-HL")
const highlight_3 = document.getElementById("R-big-HL")
const highlight_4 = document.getElementById("L-big-HL")
highlights.push(highlight_1, highlight_2, highlight_3, highlight_4)

const blush_1 = document.getElementById("R-blush")
const blush_2 = document.getElementById("L-blush")

const $head = document.getElementById('head')
const $extras = document.getElementById('extras')

const bunnyParts = []

const bunny1 = document.querySelector('#body path:first-child')
const bunny2 = document.querySelector('#body path:nth-child(2)')
const bunny3 = document.querySelector('#head path:first-child')
const bunny4 = document.querySelector('#head path:nth-child(6)')
const bunny5 = document.querySelector('#head path:nth-child(7)')
const bunny6 = document.querySelector('#head line')
bunnyParts.push(bunny1, bunny2, bunny3, bunny4, bunny5, bunny6)

let petCount = 0;
let finishedPetting = false;

function Blush(){
        $head.append(blush_1, blush_2)
}

function MoveSparkle(element){
    RemoveHide(element)
    element.classList.add("sparkle")
    setTimeout(function(){
        AddHide(element)
    }, 1000)
}

function Sparkles(){
    for (const hl of highlights){
        $head.append(hl)
        }
    setTimeout(function(){
        for (const hl of highlights){
            $extras.append(hl)
            }
        }, 1000)
    for (const sparkle of sparkles){
            MoveSparkle(sparkle)
        }
    setTimeout(function(){
            $extras.append(blush_1, blush_2)
    }, 1000)
}

for (const bunny of bunnyParts){
    bunny.addEventListener('mouseenter', function(){
        Blush()
        Sparkles()})
        bunny.addEventListener('mouseleave', function(){
        })
}