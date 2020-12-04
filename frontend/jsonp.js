/**
 * 1. jsonp只能够发起get请求
 * 2. jsonp需要制定 callback 函数名称
 * 3. 请求发送同时在本地设置一个全局函数 callback,用于解析数据
 * 3. 服务端使用callback拼接脚本
 * 4. 执行脚本，改变 promise 状态
 */
function jsonp(url, params = {}, callbackFunName = 'callbcak') {
    var script = document.createElement('script')
    var paramsStr = 'callback=' + callbackFunName
    var paramKeys = Object.keys(params)

    paramKeys.forEach((key, index) => {
        if (index !== paramKeys.length - 1) {
            paramsStr += '&'
        }
        paramsStr += (key + '=' + params[key])
        console.log(paramsStr)
    })

    script.src = url + '?' + paramsStr

    document.body.append(script)

    return new Promise((resolve, reject) => {
        window[callbackFunName] = (data) => {
            try {
                resolve(data)
            } catch (err) {
                reject(err)
            } finally {
                script.parentNode.removeChild(script)
            }
        }
    })
}


jsonp('https://count.taobao.com/counter6', {
    keys: 'TCART_234_c7f59d14b98dacfc5544b988fc8d9c5d_q',
    t: 1607066541507,
    _ksTS: 1607066541508_21,
}, 'jsonp22').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})