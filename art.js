let incOptions = []
let inc = 1
let threshold = 100
let mid = 50
let x, y
let p5Canvas

// Default framerate is 60fps
let capturer = new CCapture( {
    name: 'animation',
    format: 'webm',
})

function setup() {
    console.log(width, height)
    p5Canvas = createCanvas(windowWidth, windowHeight)
    background(0)
}

function draw() {
    if (frameCount == 1) { capturer.start() }
    if ( inc > threshold) {
        inc = 1
        background(0)
        capturer.stop()
        capturer.save()
        noLoop()
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
        circle(windowWidth - x, y, 100)
        circle(x, windowHeight - y, 100)
        inc += 0.15
    }
    capturer.capture(p5Canvas.canvas)
}
