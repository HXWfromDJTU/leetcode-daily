class Observer {
    private dep: Dep

    constructor(data) {
        this.dep = new Dep()

        Object.keys(data).forEach(key => {
            if (Object.prototype.toString.call(data[key]) === '[object Object]') {
                new Observer(data[key])
            }

            Object.defineProperty(data, key, {
                configurable: true,
                enumerable: true,
                get() {
                    if (Dep.target) {
                        // 添加当前依赖
                        this.dep.add(Dep.target)
                    }
                    return this.value
                },
                set(newVal) {
                    this.dep.notify() // 通知更新
                    this.value = newVal
                }
            })
        })
    }
}

class Dep {
    private subs = []
    static target = null

    constructor() {
        this.subs = []
    }

    add(watcher) {
        this.subs.push(watcher)
    }

    notify() {
        this.subs.forEach(watcher => {
            watcher.update()
        })
    }
}

class Watcher {
    renderFun: Function

    constructor(renderFun) {
        this.update()
        this.renderFun
    }

    update() {
        Dep.target = this
        this.renderFun()
        Dep.target = null
    }
}