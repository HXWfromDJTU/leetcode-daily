class MyEventEmitter {
    constructor() {
        this.eventMap = new Map();
        return this;
    }
    listen(eventName, callabck) {
        if (!this.eventMap.has(eventName)) {
            this.eventMap.set(eventName, [callabck]);
        }
        else {
            const cbs = this.eventMap.get(eventName);
            cbs.push(callabck);
        }
    }
    trigger(eventName) {
        if (this.eventMap.has(eventName)) {
            const cbs = this.eventMap.get(eventName);
            if (Array.isArray(cbs)) {
                cbs.forEach(cb => {
                    cb();
                });
            }
        }
    }
    off(eventName, callback) {
        if (this.eventMap.has(eventName)) {
            const cbs = this.eventMap.get(eventName);
            const cbIndex = cbs.findIndex(cb => cb === callback);
            if (cbIndex >= 0) {
                cbs.splice(cbIndex, 1);
            }
        }
    }
}
const eventBus = new MyEventEmitter();
eventBus.listen('monday', () => {
    console.log('李红 星期一 应该去做早操');
});
const race = () => {
    console.log('李逵 星期一 应该去做赛车');
};
eventBus.listen('monday', race);
eventBus.trigger('monday');
console.log('======== 取消了赛车 ========');
eventBus.off('monday', race);
eventBus.trigger('monday');
