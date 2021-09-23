let path = [
    [2, 2], [1, 1], [0, 0]                                 
]

const SNAKE_LEN: number = 2                 // snake length parameter
let snake: number[] = []                    // snake represented by trajectory indices
for (let i = - SNAKE_LEN; i < 0; i++)
    snake.push(i)                           // populate snake array

// the snake goes back and forth along the path
basic.forever(function () {
    let head: number = 0
    let tail: number
    while (head < 3) {
        led.plot(path[head][0], path[head][1])
        snake.push(head++)
        tail = snake.removeAt(0)
        if (tail >= 0)
            led.unplot(path[tail][0], path[tail][1])
        basic.pause(200)
    }

    // reverse the snake "in place"
    head = tail
    tail = 2
    while (tail > 0) {
        if (head >= 0)
            led.plot(path[head][0], path[head][1])
        snake.insertAt(0, head--)
        tail = snake.pop()
        led.unplot(path[tail][0], path[tail][1])
        basic.pause(200)
    }
})
