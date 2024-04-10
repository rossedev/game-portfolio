import kaboom from 'kaboom'

export const kab = kaboom({
    global:false,
    touchToMouse:true,
    canvas: document.getElementById("game") as HTMLCanvasElement,
})