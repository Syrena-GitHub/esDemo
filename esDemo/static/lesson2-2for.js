const arr = [1,2,3,4,5]

// ES5的遍历
// 1、for循环 支持continue break
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2){
        continue
    }
    // console.log(arr[i])
}
//1345

// 2、forEach 每个元素必须遍历
arr.forEach(function (item) {
    // console.log(item)
})
//12345

// 3、every return true才会往下执行
arr.every(function (item) {
    if (item === 2) {

    }else {
        // console.log(item)
    }
    return true
})
//1345

// 4、for in 专为object遍历
// 数组也是对象，并且可遍历
// 数组的索引是字符串!!
// 支持continue break
arr.a = 8
for (let index in arr) {
    // console.log(index, arr[index])
}
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5
// a 8

for (let index in arr) {
    // index是字符串，判断index === 2返回false
    if (index == 2) {
        continue
    }
    // console.log(index, arr[index])
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ES6的遍历
// 5、for of 专为除数组和对象遍历
// 需要修改默认遍历机制

const Price = {
    A: [1.3, 0.9, 5.8],
    B: [4.7, 10.1, 0.4],
    C: [4.3, 3.7, 10.3]
}

for (let key in Price) {
    console.log(key, Price[key])
}









