// 请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象，如：
var url = "http://www.taobao.com/index.php?key0=0&key1=1&key2=2....."
var obj = parseQueryString(url);


function parseQueryString(url) {
    const result = url.split('?')
    if(result.length < 2) {
        return {}
    }
    const queryStr = result[1]
    const queryArray = queryStr.split('&')
    // console.log(queryArray)
    let dict = {}
    queryArray.forEach(element => {
        const keyValues = element.split('=')
        dict[keyValues[0]] = keyValues[1]
    });
    console.log(dict)
    return dict
}

