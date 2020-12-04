/**
 * 
 * 要求：根据以下输出结果，封装一个类或者闭包
 * 
LazyMan('Tony');
// Hi i am Tony  


LazyMan('Tony').sleep(10).eat('lunch')
// Hi I am Tony  
// 等待了10秒....
// I am eating lunch  



LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony  
// I am eating lunch  
// 等待了10秒....
// I am eating dinner  


LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony  
// 等待了5秒....
// I am eating lunch  
// I am eating dinner
// 等待了10秒....
// I am eating junkfood  


 * 
 * 
 * 
 * 
 */

/**
 * 核心思想:
 * 1. 链式调用都是同步调用，使用双端队列记录
 * 2. 执行的顺序使用全局的 next() 函数进行控制
 *    前者执行完毕，调用 next() 取出并执行下一个函数
 *    也就是实现了异步变为同步的过程
 * 3. 需要调整顺序的，使用双端队列的特性，在执行前进行队列维护
 **/

var LazyMan = function (name) {
    var lazyworks = [] // 双端队列
    console.log('Hi i am ', name)

    var _next = function () {
        if (lazyworks.length) {
            var work = lazyworks.shift()
            work()
        }
    }

    process.nextTick(() => {
        _next()
    })

    var sleep = function (wait) {
        lazyworks.push(() => {
            setTimeout(() => {
                console.log('等待了 ' + wait + 's')
                _next()
            }, wait)
        })
        return this
    }

    var sleepFirst = function (wait) {
        lazyworks.unshift(function () {
            setTimeout(function () {
                console.log('等待了 ' + wait + 's')
                _next()
            }, wait)
        })
        return this
    }


    var eat = function (sth) {
        lazyworks.push(function () {
            console.log('I am eating ' + sth)
            _next()
        })
        return this
    }

    return {
        sleep,
        sleepFirst,
        eat
    }
}

// new LazyMan('Tony');
// // Hi i am Tony  


// LazyMan('Tony').sleep(10).eat('lunch')
// // Hi I am Tony
// // 等待了10秒....
// // I am eating lunch  



// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony  
// I am eating lunch  
// 等待了10秒....
// I am eating dinner  


// LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony  
// 等待了5秒....
// I am eating lunch  
// I am eating dinner
// 等待了10秒....
// I am eating junkfood  

