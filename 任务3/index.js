window.onload = function () {
    let nav_links = document.querySelectorAll('#nav-link')
    let videos = document.querySelector('#video')
    let moneys = document.querySelector('.money')
    let last = document.querySelector('.last')
    let form = document.querySelector('#form')
    let ipt = form.querySelector('input')
    let btn = form.querySelector('button')
    //点击滚动到指定位置
    nav_links[0].onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    nav_links[1].onclick = function () {
        window.scrollTo({
            top: videos.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
    nav_links[2].onclick = function () {
        window.scrollTo({
            top: last.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
    ipt.onblur = function(){
        if (emails.test(ipt.value)!=true&&ipt.value!='') {
            ipt.style.borderColor = 'red';
        }else{
            ipt.style.borderColor = 'grey';
        }
    }
    // 邮箱验证
    let emails = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    btn.onclick = function(){
        if (emails.test(ipt.value)) {
           form.action = 'goto.html'
        }
    }
}