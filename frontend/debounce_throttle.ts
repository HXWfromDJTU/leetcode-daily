/**
 *  防抖  (冷却期间触发，延迟冷却期)
 *  触发  ==== 等待时间n ===> 执行
 *  触发  == 等待小于n => 再次触发 === 等待时间n ===> 执行 
 *  事件触发后，需要一个冷静期，冷静期间内若再次触发，则继续冷静，直到冷静n完成
 */

function debounce(func, wait, immediate = false) {
    var timer = null // 定时器需要在外层

    return function () {
        var context = this
        var args = Array.prototype.slice.call(arguments, 0)

        if (timer) clearTimeout(timer) // 取消掉上次的预约执行

        // 是否立即执行，是两种处理流程，内部处理不会修改是否立即执行的选项

        // 判断用户是否设置马上执行
        if (immediate) {
            var callNow = !timer // 当前若处于冷却期，则不会马上执行

            // 立即执行后，马上进入一个冷却期，冷却期后将定时器置空，恢复初始状态
            // 若用户立即触发后，又频发触发，则冷却器一直延长
            timer = setTimeout(function () {
                timer = null
            }, wait)

            if (callNow) {
                func.apply(context, args)
            }
        } else {
            // 重新设定一个定时器
            timer = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }
    }
}

const foo = function () {
    console.log('打印')
}

const func_debounce = debounce(foo, 2000, true)

window.addEventListener('mousemove', func_debounce)

/**
 * 节流 (冷却期多次触发，收归一次)
 * 触发(执行) === 冷却时间n(期间有一次以上触发) ==> 执行
 * 触发(执行) === 冷却时间n(没有触发) ====> 触发(执行) ===> 
 */
function throttle(func, wait) {
    var timer = null

    return function () {
        var context = this

        if (!timer) {
            // 非冷却期，直接执行
            // func.apply(context, arguments)

            // 设置冷却期
            timer = setTimeout(function () {
                timer = null

                func.apply(context, arguments)
            }, wait)
        }
    }
}


/**
 * 两个思考方向
 * 1. 初次触发，上次触发时间 previous 为 0，则立即触发 (头)
 * 2. 时间戳冷却期内再次触发，remaining 不为 0，设定一个 remaining 时长的定时器，超时后执行(尾)
 * 3. 若时间戳计时剩余时间已经到了，则直接触发，并更新 previous 更新时间
 */
function throttle2(func, wait) {
    var context, timer
    var previous = 0

    return function () {
        var now = +new Date().getTime()
        var remaining = wait - (now - previous)
        context = this

        // 若时间戳间隔到了，则更新当前执行时间，并且立即执行
        if (remaining <= 0 || remaining > wait) {
            previous = now
            func.apply(context, arguments)
        } else if (!timer) {
            // 若时间未到，但是触发了事件，则使用定时器在时间到了的时候
            timer = setTimeout(function () {
                previous = +new Date()
                timer = null
                func.apply(context, arguments)
            }, remaining)
        }
    }
}


function debounce2(func, wait, immediate) {
    var timer = null

    return function () {
        var context = this

        // 处于冷却期，触发事件则清除旧定时器
        if (timer) clearTimeout(timer)

        if (immediate) {
            var callNow = !timer // 非处于冷却期，则可以直接调用

            // 创建一个空的冷却期，超时则自己清除自己
            timer = setTimeout(timer => {
                timer = null
            }, wait)

            // 同步立刻执行函数  
            if (callNow) {
                func.apply(context, arguments)
            }
        } else {
            timer = setTimeout(function () {
                timer = null
                func.apply(context, arguments)
            })
        }
    }
}