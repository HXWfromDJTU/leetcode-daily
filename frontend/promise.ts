const PROMISE_STATUS = {
    resolved: 'resolve',
    rejected: 'rejected',
    pending: 'pending'
}

class MyPromise {
    private _status: String = 'pending'
    private _resolveQueue: Function[] = []
    private _rejectedQueue: Function[] = []

    private _resolveData: any
    private _error: Error

    constructor(asyncFun) {
        const _resolve = (data) => {
            if (this._status === PROMISE_STATUS.pending) {
                this._status = PROMISE_STATUS.resolved
            }
            this._resolveData = data
            this._asyncExcute()
        }
    
        const _reject = (err) => {
            if (this._status === PROMISE_STATUS.pending) {
                this._status = PROMISE_STATUS.rejected
            }
            this._error = err
            this._asyncExcute()
        }
        // 需要给 _resolve 与 _reject 绑定当前实例，否则在外调用会指向全局对象
        asyncFun(_resolve.bind(this), _reject.bind(this))

        
        return this
    }

    then(userResolveFun: Function, userRejectedFun: Function) {
        const resolveFun = typeof userResolveFun === 'function' ? userResolveFun : value => value
        const rejectFun = typeof userRejectedFun === 'function' ? userRejectedFun : error => { throw error }

        // 若当前状态还在pending
        if (this._status === PROMISE_STATUS.pending) {
            this._resolveQueue.push(resolveFun)
            this._rejectedQueue.push(rejectFun)
        }
        
        if (this._status === PROMISE_STATUS.resolved) {
            this._asyncExcute(
                this._resolveQueue.pop(),
                this._resolveData
            )
        } 
        
        if (this._status === PROMISE_STATUS.rejected) {
            this._asyncExcute(
                this._rejectedQueue.pop(),
                this._resolveData
            )
        }

        const thenPromise = new MyPromise((resolve, reject) => {

        })

        return thenPromise
    }

    catch(userRejectedFun: Function) {
        this._rejectedFun = userRejectedFun
    }

    _asyncExcute(_excuteFun: Function, _param: any) {
        // const _excuteFun = this._status === PROMISE_STATUS.resolved ? this._resolveFun : this._rejectedFun
        // const _params = this._status === PROMISE_STATUS.resolved ? this._resolveData : this._error

        // if (window && window.MessageChannel) {

        //     return
        // }

        // if (window && window.MutationObserver) {

        //     return
        // }

        // if (process && ProcessingInstruction.nextTick) {

        //     return
        // }

        setTimeout(() => {
            _excuteFun(_param)
        }, 0)
    }
}

// console.log('sync data')
// const promise = new MyPromise((res, rej) => {
//     setTimeout(() => {
//         res('async data')
//     })
// })

// promise.then(data => {
//     console.log(data)
// })



const promiseOrigin = new Promise((res, rej) => {
    setTimeout(() => {
        res(123)
    })
})

promiseOrigin.then(data => {
    console.log('1 then', data)
}).then(data => {
    console.log('2 then', data)
})