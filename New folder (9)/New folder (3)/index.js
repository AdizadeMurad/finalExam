let x = 0
let y = 0
let snake = document.querySelector(".snake")
document.body.addEventListener("keydown", function (e) {
    console.log(e.code);
    switch (e.code) {
        case "KeyA":
            y += 20;
            console.log(y);
            snake.style.transform = `translate(${x}px, ${y}px)`;
            console.log(snake);
            break;
        case "KeyW":
            x -= 20;
            snake.style.transform = `translate(${x}px, ${y}px)`;
            break;
        case "KeyD":
            y -= 20;
            snake.style.transform = `translate(${x}px, ${y}px)`;
            break;
        case "KeyS":
            x += 20;
            snake.style.transform = `translate(${x}px, ${y}px)`;
            break;

        default:
            break;
    }

})
