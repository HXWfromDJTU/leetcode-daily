function YourPromise(executor) {
    // 添加状态属性
    this.PromiseState = 'pending'
    // 添加结果属性
    this.PromiseResult = ''

    function resolve(data) {
        // 1.修改对象的状态
        this.PromiseState = 'fulfilled'
        // 2.设置对象结果值
        this.PromiseResult = data
    }

    function reject(errMsg) {
        // 1.修改对象的状态
        this.PromiseState = 'rejected'
        // 2.设置对象结果值
        this.PromiseResult = errMsg
    }

    try {
        executor(resolve.bind(this), reject.bind(this))
    }
    catch (err) {
        reject(err)
    }
}

YourPromise.prototype.then = function (onResolved, onRejected) {
    // then 方法中，若状态已经决定，则直接执行
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult)
    }

    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult)
    }

    if (this.PromiseState === 'pending') {
        
    }


}