const xhr = new XMLHttpRequest()

// 配置项
const option = {
    method: 'GET',
    url: 'https://api.abc.com/?id=123123',
    isAsync: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
const data = {
    key: 123
}

const XHR_STATE = {
    uninitial: 0,
    loading: 1,
    loaded: 2,
    parsing: 3,
    complished: 4,
}

xhr.open(option.method, option.url, option.isAsync)

Object.keys(option.headers).forEach(key => {
    xhr.setRequestHeader(key, option.headers[key])
})

xhr.onreadystatechange = () => {
    if (xhr.readyState === XHR_STATE.complished) {
        console.log(xhr.responseText)
    }
}

option.method === 'GET' ? xhr.send() : xhr.send(data)