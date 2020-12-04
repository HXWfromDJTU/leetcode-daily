function MyPromise(executor) {

    this.status = MyPromise.STATUS.pending // 初始化为 pending
    this.rejectHandlers = []
    this.resolvehandlers = []
    
    var resolveFun = function () {
        if (this.status !== MyPromise.STATUS.pending) return
        this.status = MyPromise.STATUS.fulfilled
        
        while (this.resolvehandlers.length > 0) {
            const resolveHandler = this.resolvehandlers.shift() // 双堆队列，从头开始执行
            MyPromise.asyncExcutor(resolveHandler)
        }
    }

    var rejectFun = function () {
        if (this.status !== MyPromise.STATUS.pending) return
        this.status = MyPromise.STATUS.rejected

        while (this.rejectHandlers.length > 0) {
            const rejectHandler = this.rejectHandlers.shift() // 双堆队列，从头开始执行
            MyPromise.asyncExcutor(rejectHandler)
        }
    }

    executor(resolveFun.bind(this), rejectFun.bind(this))

    return this
}

MyPromise.STATUS = {
    fulfilled: 'fulfilled',
    rejected: 'rejected',
    pending: 'pending'
}

MyPromise.prototype.catch = function (userRejectHandler) {
    // todo 最后补充传入参数不为 Function 的情况
    if (this.status === MyPromise.STATUS.rejected) { 
        while (this.rejectHandlers.length > 0) {
            const rejectHandler = this.rejectHandlers.shift() // 双堆队列，从头开始执行
            MyPromise.asyncExcutor(rejectHandler)
        }
    }
}

MyPromise.prototype.then = function (userResolveHandler, userRejectHandler) {
    // todo 最后补充传入参数不为 Function 的情况

    if (typeof userResolveHandler === 'function') { 
        this.resolvehandlers.push(userResolveHandler)
    }
  
    if (typeof userRejectHandler === 'function') { 
        this.rejectHandlers.push(userRejectHandler)
    }

    if (this.status === MyPromise.STATUS.fulfilled) {
        while (this.resolvehandlers.length > 0) {
            const resolveHandler = this.resolvehandlers.shift() // 双堆队列，从头开始执行
            MyPromise.asyncExcutor(resolveHandler)
        }
    }

    if (this.status === MyPromise.STATUS.rejected) { 
        while (this.rejectHandlers.length > 0) {
            const rejectHandler = this.rejectHandlers.shift() // 双堆队列，从头开始执行
            MyPromise.asyncExcutor(rejectHandler)
        }
    }
}

MyPromise.asyncExcutor = function (func) {
    // setTimeout(func, 0)
    process.nextTick(func)
}

MyPromise.reslove = function () { }

MyPromise.reject = function () { }

MyPromise.race = function () { }

MyPromise.all = function () { }







// origin promise test
const promise = new MyPromise((reslove, reject) => {
   // throw 'error resolve1-2'

   setTimeout(() => {
    reslove('promise1 error')
   }, 2000)
})

// const promise2 = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reslove('promise2 resolve')
//     }, 3000)
// })

promise.then(data => {
    console.log('resolve111')
})

promise.then(data => {
    console.log('resolve222')
})

promise.catch(err => {
    console.log('reject 1111')
    console.log(err)
})

promise.then(null, err => {
    console.log('reject 222')
    console.log(err)
})

promise.then(null, err => {
    console.log('reject 333')
    console.log(err)
})

promise.then(data => {
    console.log('resolve333')
})

console.log('同步 promise 当前状态', promise)

// const proRace = Promise.race([
//     Promise.reject(4),
//     2,
//     Promise.resolve(3)
// ])
// proRace.then(data => {
//     console.log(data)
// })

// promise2.then(data => {
//     console.log('resolve2-1', data)
// }).then(data => {
//     console.log('resolve2-2', data)
// })

