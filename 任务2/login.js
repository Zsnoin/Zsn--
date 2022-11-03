window.onload = function () {
    //获取元素
    let inputs = document.querySelectorAll('.inputs')
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let number = document.querySelector('#number')
    let types = document.querySelector('#types')
    let like_move = document.querySelector('#like_move')
    let btn = document.querySelector('button')
    let form = document.querySelector('form')
    let ts1 = document.querySelector('.ts1')
    // 正则表达式
    // 姓名
    let names = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/;
    // 邮箱
    let emails = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
    // 年龄
    let numbers = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onfocus = function () {
            console.log(11);
        }
    }
    // 封装正则表达式函数
    function reg(reg, val) {
        if (reg.test(val.value) === false && val.value != '') {
            val.style.borderColor = 'red'
        } else {
            val.style.borderColor = 'white'
        }
    }
    name.onblur = function () {
        reg(names, name)
    }
    email.onblur = function () {
        reg(emails, email)
    }
    number.onblur = function () {
        reg(numbers, number)
    }

    like_move.onblur = function () {
        if (like_move.value != '') {
            like_move.style.borderColor = 'white'
        }
    }
    types.onblur = function () {
        if (types.value != '') {
            types.style.borderColor = 'white'
        }
    }
    // 判断是否为空函数
    function isNone(node){
        if (node.value === '') {
            node.style.borderColor = 'red';
        }
    }
    btn.onclick = function () {
        isNone(like_move)
        isNone(types)
        isNone(name)
        isNone(email)
        isNone(number)
        if (like_move.value != '' && types.value != ''
            && names.test(name.value) == true &&
            emails.test(email.value) == true &&
            numbers.test(number.value) == true) {
            alert('表单提交成功')
            form.action = 'index.html'

        }
        else {
            alert('表单提交失败,请检查填写是否有误！')
        }
    }
}