window.onload = function () {
    let loginLi = document.querySelector('.loginLi')
    let box2 = document.querySelector('.box2')
    let box3 = document.querySelector('.box3')
    let box4 = document.querySelector('.box4')
    let down = document.querySelector('.down')
    let Wechat = document.querySelector('.Wechat')
    let down_wx = document.querySelector('.down_wx')
    let input_div = document.querySelector('.input_div')
    let QQ = document.querySelector('.QQ')
    let down_qq = document.querySelector('.down_qq')
    let QQ_ipts = document.querySelectorAll('.QQ-ipt')
    let QQ_login = document.querySelector('.QQ_login')
    let tips = document.querySelector('.tips')
    loginLi.onclick = function () {
        box2.style.display = 'block'
    }
    down.onclick = function () {
        box2.style.display = 'none'
    }
    Wechat.onclick = function () {
        box3.style.display = 'block'
        box2.style.display = 'none'
    }
    down_wx.onclick = function () {
        box3.style.display = 'none'
    }
    QQ.onclick = function () {
        box4.style.display = 'block'
        box2.style.display = 'none'
    }
    down_qq.onclick = function () {
        box4.style.display = 'none'
    }
    let flag = true;
    input_div.onclick = function () {
        if (flag) {
            input_div.innerHTML = `<img src="./imgs/全选.png" alt="" class='all'>`;
            input_div.style.border = 'none'
            input_div.parentNode.style.color = 'black'
            flag = false;
        } else {
            flag = true;
            input_div.style.border = `1px solid grey`
            input_div.innerHTML = '';
        }
    }
    // QQ登录验证
    let str = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}|[1-9][0-9]{4,10}@qq.com|[1-9][0-9]{4,}$/
    let pas = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/
    QQ_login.onclick = function () {
        let all = document.querySelector('.all')
        if (all != null) {
            input_div.parentNode.style.color = 'black'
        } else if (all == null) {
            input_div.parentNode.style.color = 'red'
        };
        if (str.test(QQ_ipts[0].value) === false
            && QQ_ipts[0].value !== '' && QQ_ipts[1].value !== '') {
            console.log(1);
            tips.innerText = '*账号或密码错误'
        } else if (QQ_ipts[0].value !== '' && QQ_ipts[1].value === '') {
            tips.innerText = '*你还没有输入密码'
        } else if (QQ_ipts[0].value === '' && QQ_ipts[1].value !== '') {
            tips.innerText = '*你还没有输入账号'
        } else if (str.test(QQ_ipts[1].value) === false
            && QQ_ipts[0].value !== '' && QQ_ipts[1].value !== '') {
            tips.innerText = '*账号或密码错误'
        } else if (QQ_ipts[0].value === '' && QQ_ipts[1].value === '') {
            tips.innerText = '*你还没输入账号和密码'
        }else if(all != null){
            alert('登录成功')
        }
    }
    QQ_ipts[0].onblur = function () {
        if (QQ_ipts[0].value === '' && QQ_ipts[1].value === '') {
            tips.innerText = '';
        }
    }
    QQ_ipts[1].onblur = function () {
        if (QQ_ipts[0].value === '' && QQ_ipts[1].value === '') {
            tips.innerText = '';
        }
    }
    QQ_ipts[0].onfocus= function () {
            tips.innerText = '';
    }
    QQ_ipts[1].onfocus= function () {
            tips.innerText = '';
    }

}