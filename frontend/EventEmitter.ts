// 发布订阅模式， EventEmitter 模式，着重于 proxy
class MyEventEmitter {
    eventMap: Map<any, any> = new Map()

    constructor () {
        return this
    }

    listen (eventName: String, callabck: Function) {
        if (!this.eventMap.has(eventName)) {
            this.eventMap.set(eventName, [callabck])
        } else {
            const cbs = this.eventMap.get(eventName)
            cbs.push(callabck)
        }
    }

    trigger (eventName: String) {
        if (this.eventMap.has(eventName)) {
            const cbs = this.eventMap.get(eventName)
            if (Array.isArray(cbs)) {
                cbs.forEach(cb => {
                    cb()
                })
            } 
        }
    }

    off (eventName: String, callback: Function) {
        if (this.eventMap.has(eventName)) {
            const cbs = this.eventMap.get(eventName)
            const cbIndex = cbs.findIndex(cb => cb === callback)

            if (cbIndex >= 0) {
                cbs.splice(cbIndex, 1)
            }
        }
    }
}


const eventBus = new MyEventEmitter()

eventBus.listen('monday', () => {
    console.log('李红 星期一 应该去做早操')
})

const race = () => {
    console.log('李逵 星期一 应该去做赛车')
}

eventBus.listen('monday', race)

eventBus.trigger('monday')

console.log('======== 取消了赛车 ========')

eventBus.off('monday', race)

eventBus.trigger('monday')


// 观察者模式 ====> 订阅者 和 被观察者 直接接触
class Obsever {
    cb: Function

    constructor (callback: Function) {
        this.cb = callback
    }

    update () {
        this.cb()
    }
}

class Subject {
    observerList: Obsever[]

    constructor () {
        this.observerList = []
    }

    addObserver (obsever: Obsever) {
        this.observerList.push(obsever)
    }

    notify () {
        this.observerList.forEach(obsever => {
            obsever.update()
        })
    }
}

const obs = new Obsever(() => {
    console.log('updated....')
})

const sub = new Subject()

sub.addObserver(obs)

sub.notify()