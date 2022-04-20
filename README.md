
# Testing Canvas Recording via [CCapture](https://github.com/spite/ccapture.js/)
js library in P5JS

### Supported Formats -

- As of April 2022, CCapture supports 
    - Webm
    - Gif
    - PNG / JPEG

### If you want custom frameRate -

- Set `frameRate(x)` in setup() function for p5js
- Set `frameRate: x` options inside the CCapture Object
> where x is the number of frames you want

### Converting webm
- MP4 Conversion
> ffmpeg -i animation.webm animation.mp4
If an error pops up `height not divisible by 2`
> ffmpeg -i animation.webm -vf 'scale=-2:min(1080\,if(mod(ih\,2)\,ih-1\,ih))' animation.mp4
- GIF Conversion
> ffmpeg -i animation.webm -filter_complex "[0:v] fps=15, split [a][b];[a] palettegen [p];[b][p] paletteuse" animation.gif
A great article by [GIPHY](https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/) on ffmpeg gif conversion

