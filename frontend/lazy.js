
// 1. 请实现如下函数；
// function sleep(timeout: number): Promise {
//   // 待实现
// }

// 2. 请修改上述函数的接口和实现，让该函数支持取消。也就是说，可以在sleep没有结束前，promise提前resolve；
// 3. 请为2中实现的函数提供几组单元测试，示意即可；
// 4. 如何证明2中实现的函数不会内存泄露。
function sleep(timeout) {
  var promise, timer, resolveFun, rejectFun

  promise = new Promise((resolve, reject) => {
    resolveFun = resolve
    rejectFun = reject

    timer = setTimeout(function () {
      clearTimeout(timer)
      resolve()
    }, timeout)
  })

  promise.resolveCancel = resolveFun
  promise.rejeclCancel = rejectFun

  return promise
}


// test case
const promise = sleep(3000)

promise.then(data => {
  console.log('resolve')
}).catch(err => {
  console.log('reject')
})

// 提前结束
// promise.rejeclCancel()
// promise.resolveCancel()



