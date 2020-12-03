Object._Create = function (proto) {
    if (typeof proto !== 'object') {
        throw new Error('can not set proto to an non-object')
    }
    // 类型检查
    var obj = new Object()
    Object.setPrototypeOf(obj, proto)
}

