// 判断是否复杂对象
const isComplexObj = data => {
    var dataType = typeof data
    return data !== null && (dataType === 'object' || dataType === 'function')
}

// 判断是否为容器型对象，是否需要深入递归

// 获取一个复杂对象的原始值
const initComplexObj = data => {
    const ctor = data.constructor
    return new ctor()
}

const DATA_TYPE_STR = {
    map: '[object Map]',
    set: '[object Set]',
    array: '[object Array]',
    object: '[object Object]',
    function: '[object Function]'
}

// 深拷贝
const deepCopy = function (target, currentMap = new Map()) {
    // 非对象类型，直接返回值
    if (!isComplexObj(target)) {
        return target
    }

    // 创建深拷贝起点
    const cloneTarget = initComplexObj(target)

    // 检测是否已经被拷贝，防止循环引用
    if (currentMap.has(target)) {
        return currentMap.get(target)
    }
    currentMap.set(target, cloneTarget)

    var dataType = Object.prototype.toString.call(target)

    // 处理 set
    if (dataType === DATA_TYPE_STR.set) {
        // 遍历所有元素，并且进行递归
        target.forEach(value => {
            cloneTarget.add(deepCopy(value, currentMap))
        })
        return cloneTarget
    }

    // 处理map
    if (dataType === DATA_TYPE_STR.map) {
        target.forEach((value, key) => {
            cloneTarget.set(key, deepCopy(value, currentMap))
        })
        return cloneTarget
    }

    // 处理数组
    if (dataType === DATA_TYPE_STR.array) {
        target.forEach(value => {
            cloneTarget.push(deepCopy(value))
        })
        return cloneTarget
    }

    if (dataType === DATA_TYPE_STR.object) {
        Object.keys(target).forEach(key => {
            cloneTarget[key] = deepCopy(target[key])
        })
        return cloneTarget
    }

    if (dataType === DATA_TYPE_STR.function) {
        var funcString = target.toString()
        if (target.prototype) {
            // 使用正则提取字符串，使用构造器返回
            return new Function()
        } else {
            // 箭头函数，使用 eval 模拟
            return eval(funcString)
        }
    }

    return cloneTarget
}