/**
 *  防抖   
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