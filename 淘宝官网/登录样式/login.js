window.onload = function () {
    let change_img = document.querySelector('.change').querySelector('img')
    let box1 = document.querySelector('.box1')
    let box2 = document.querySelector('.box2')

    let flag =true;
    change_img.onclick = function () {
        if (flag) {
            change_img.src = './imgs/密码.png';
            box1.style.display = 'none'
            box2.style.display = 'block'
            flag = false;
        } else {
            change_img.src = './imgs/扫码.png';
            box2.style.display = 'none'
            box1.style.display = 'block'
            flag = true;
        }
    }
}