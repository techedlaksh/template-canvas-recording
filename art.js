let incOptions = []
let inc = 1
let threshold = 100
let mid = 50
let x, y
function setup() {
    console.log(width, height)
    let c = createCanvas(windowWidth, windowHeight)
    background(0)
}

function draw() {
    if ( inc > threshold) {
        inc = 1
        background(0)
    }

    if (inc <= mid) {
        x = windowWidth * (inc/100)
        y = windowHeight * (inc/100)
        circle(x, y, 100)
        circle(windowWidth - x, windowHeight - y, 100)
        inc += 0.15
    } else if (inc <= threshold) {
        x = windowWidth * (inc/100)
        y = windowHeight * (inc/100)
        console.log(x, y)
        circle(windowWidth - x, y, 100)
        circle(x, windowHeight - y, 100)
        inc += 0.15
    }
}
