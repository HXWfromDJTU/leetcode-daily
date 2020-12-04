function Taskqueue() {
    var taskQueue = []

    var next = function () {
        if (taskQueue.length > 0) {
            var fn = taskQueue.shift()
            fn()
        }
    }

    var sleep = function (wait) {
        taskQueue.push(function () {
            setTimeout(function () {
                next()
            }, wait)
        })
        return this
    }

    var say = function (num) {
        taskQueue.push(function () {
            console.log(num)
            next()
        })
        return this
    }

    var run = function () {
        next()
    }

    return {
        sleep,
        say,
        run
    }
}

const taskQueue = Taskqueue()

taskQueue.sleep(1000).say(1).sleep(2000).say(3).sleep(1000).say(4).run()