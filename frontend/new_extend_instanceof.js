const _new = function (Ctor) {
    if (typeof ctor !== 'function') {
        throw new Error ('new must be operate to an function')
    }

    var obj = Object.create(Ctor.prototype)

    var ctorParams = Array.prototype.slice.call(arguments, 1)
    var ctorRet = Ctor.apply(obj, ctorParams)

    var isLeagalObject = typeof ctorRet === 'object' && ctorRet !== null

    return isLeagalObject ? ctorRet : obj
}

const _extend = function (CtorA, CtorB) {
    // 进行类型检测
    if (typeof CtorA === 'function' && typeof CtorB === 'function') {
        throw new Error('extends must operate between two function constructor')
    }

    const _proto = Object.create(CtorB.prototype) // 创建新的对象原型，并且搭建原型链
    _proto.constructor = CtorA // 原型 --> 构造器
    CtorA.prototype = _proto // 构造器 --> 原型
}

const _instance_of = function(obj, Ctor) {
    // 类型检测
    if (obj === null || typeof obj === 'undefined') {
        throw new Error('can not convert undefined or null to an object.')
    }
    if (typeof Ctor !== 'function') {
        throw new Error('second param of _instance_of must be an function.')
    }

    // 初次找原型
    let _proto_ = Object.getPrototypeOf(obj)

    // 不断向上寻找
    while (_proto_ !== null) {
        if (_proto_ === Ctor.prototype) {
            return true
        }
        _proto_ = Object.getPrototypeOf(_proto_)
    }

    return false
}