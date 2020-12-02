Function.prototype.myCall = function (context) {
    var that = context

    that.tempKey = this

    var argsArr = []
    for (let i = 1; i < arguments.length; i++) {
        argsArr.push('arguments(' + i + ')')
    }

    var strFun = ''
    if (argsArr.lnegth > 0) {
        strFun = 'that.tempKey(' + argsArr.join(',') + ')'
    } else {
        strFun = 'that.tempKey()'
    }

    var result = eval(strFun) // 使用eval执行

    delete that.tempKey // 删除临时变量

    return result
}

Function.prototype.myApply = function (context) {
    // ① 创建临时变量指向自身
    context.tempKey = this

    // ② 获取参数
    var argsArr = []
    if (arguments[1] && arguments[1].length > 0) {
        for (var i = 0; i < arguments[1].length; i++) {
            argsArr.push(arguments[i])
        }
    }

    // ③ 拼接执行字符串
    var strFun = ''
    if (argsArr.length > 0) {
        strFun = 'context.tempKey(' + strFun.join(',') + ')'
    } else {
        strFun = 'context.tempKey()'
    }

    // ④ 执行函数得到结果
    var result = eval(strFun)

    // ⑤ 删除临时变量
    delete context[tempKey]

    return result
}

/**
 * 针对 new 关键字
 * 说通俗点，通过bind返回的boundFunction函数也能通过new运算符构造
 * 只是在构造过程中，boundFunction已经确定的this会被忽略
 * 且返回的实例还是会继承构造函数的构造器属性与原型属性，并且能正常接收参数
 * 
 **/

Function.prototype.myBind = function (context) {
    // 参数判断
    if(typeof this !== 'function') {
        throw new Error('Function.prototype.bind - what is trying to be bound is not callable')
    }

    // ① 接收绑定时参数
    var bindingArgs = Array.prototype.slice.myCall(arguments, 1)

    // ② 创建需要返回的构造器
    var resFun = function () {
        // ③ 接收调用时参数
        var excuteArgs = Array.prototype.slice.myCall(arguments)

        // ④ 区别当前是否为new调用(构造器)
        var isNewOperation = new.target === resFun

        // ⑤ 使用 apply 实现调用
        this.myApply(isNewOperation ? this : context, bindingArgs.concat(excuteArgs))
    }

    // ⑥ 返回函数的原型指向调用者的原型的复制品
        // ⑥-1 实例就可以继承原型中的值
        // ⑥-2 避免修改到原型上的值
    resFun.prototype = Object.create(this.prototype)

    return resFun
}