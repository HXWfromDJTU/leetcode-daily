function myPow (x, n) {
    // 特殊值处理 0 与 1
    if (n === 0) return 1
    if (n === 1) return x

    // n 为复制( 1 / -n 的形式)
    if (n < 0) {
        return 1 / myPow(x, -n)
    }

    // n 为单数(拆分为 1 * (n-1) * (n - 1)的形式)
    if (n % 2 === 1) {
        return x * myPow(x, n - 1) // n - 1 确保为偶数
    }

    // n 偶数(因为偶数最后可以分解为 A * A 的模式)
    if (n % 2 === 0) {
        return myPow(x, n / 2) * myPow(x, n / 2)
    }
}