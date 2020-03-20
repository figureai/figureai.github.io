
// const str = '123bb456d789'

// // search(reg): 检索与reg相匹配的值
// // 输出： 3
// console.log(str.search(/b{2}/))     
// // match(reg): 找到一个或多个reg匹配的值
// // 输出： [ '456', index: 5, input: '123bb456d789', groups: undefined ]
// console.log(str.match(/[4-6]{3}/))
// // replace(reg, str): 替换与reg匹配的值为str的内容
// // 输出： 123bb4561119
// console.log(str.replace(/d[7-8]{2}/, '111'))
// // split(reg, number): 把字符依照reg匹配规则分割，并且返回一个number长度的数组
// // 输出： [ '123bb', 'd789' ]
// console.log(str.split(/456/, 2))


const str = '123bb4567bb89'

const reg = new RegExp("bb","g")
console.log(reg.exec(str))
