const reg = /\.(jpg|gif|png)$/

const testStrs = [
    'https://asdasd.png',
    'https://q23123.gif',
    'https://123123.jpg',
    'https://123123.rmvb',
]

testStrs.forEach(str => {
    console.log(str, reg.test(str))
})