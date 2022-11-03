window.onload = function () {
    //获取数据
    let NO = document.querySelector('.no').querySelector('ul')
    let YES = document.querySelector('.yes').querySelector('ul')
    let selects = document.querySelectorAll('.select')
    let target = document.querySelector('.target')
    let btn = document.querySelector('button')
    let num1 = document.querySelector('.num1')
    let num2 = document.querySelector('.num2')

    // 删除函数
    function del() {
        let as = document.querySelectorAll('a')
        for (let j = 0; j < as.length; j++) {
            as[j].onclick = function () {
                this.parentNode.parentNode.remove()
                add()
                setData()
                Echart()
            }
        }
    }

    // 完成数量和未完成数量函数
    function add() {
        let selects = document.querySelectorAll('.select')
        let no = 0;
        let yes = 0;
        for (let i = 0; i < selects.length; i++) {
            if (selects[i].checked) {
                yes++
            } else {
                no++
            }
        }
        num1.innerText = no;
        num2.innerText = yes;
    }
    add()
    // 完成状态切换函数
    function changes() {
        let selects = document.querySelectorAll('.select')
        for (let i = 0; i < selects.length; i++) {
            selects[i].onclick = function () {
                if (this.checked) {
                    this.ariaChecked = true;
                    YES.appendChild(this.parentNode)
                } else {
                    this.ariaChecked = false;
                    NO.appendChild(this.parentNode)
                }
                del()
                add()
                setData()
                Echart()
            }
        }
    }

    // 添加目标函数
    btn.onclick = function () {
        if (target.value) {
            let Li = document.createElement('li')
            Li.innerHTML = `
            <input type="checkbox" class="select">
            <span class="content">${target.value}</span>
            <span class="del">
                <a href="javascript:;" >删除</a>
                <select name="" id="" >
                    <option value="">提醒</option>
                    <option value="10">10s</option>
                    <option value="15">15s</option>
                    <option value="20">20s</option>
                    <option value="30">30s</option>
                </select>
            </span>
                `
            target.value = ''
            console.log(Li)
            NO.appendChild(Li)
            changes()
            setData()
            add()
            del()
            Echart()
            Call()
        }
    }

    //本地存储功能
    function setData() {
        //创建空数组用来存储目标及状态
        let arr = []
        //获取到所有的目标以及状态
        let ipts = document.querySelectorAll('.select')
        let contents = document.querySelectorAll('.content')
        let select = document.querySelector('select')
        console.log(ipts.length);
        for (let i = 0; i < ipts.length; i++) {
            // 创建空对象用来存储每条数据
            let data = {}
            //目标内容
            data.text = contents[i].innerText;
            //目标状态
            data.no = ipts[i].checked
            //目标提示
            // data.time = 
            //加入数组中
            arr.push(data)
            //存储到本地
            localStorage.setItem('todolist', JSON.stringify(arr));
        }
        if (ipts.length == 0) {
            localStorage.clear()
        }
    }

    //读取本地数据渲染页面
    function getData() {
        let newsData = JSON.parse(localStorage.getItem('todolist'))
        console.log(newsData);
        if (newsData != null) {
            for (let i = 0; i < newsData.length; i++) {
                let Li = document.createElement('li')
                // 根据状态渲染页面
                if (newsData[i].no) {
                    Li.innerHTML = `
                    <input type="checkbox" class="select" checked>
                    <span class="content">${newsData[i].text}</span>
                    <span class="del">
                        <a href="javascript:;" >删除</a>
                        <select name="" id="" >
                            <option value="">提醒</option>
                            <option value="10">10s</option>
                            <option value="15">15s</option>
                            <option value="20">20s</option>
                            <option value="30">30s</option>
                        </select>
                    </span>
                `
                    YES.appendChild(Li)
                }
                else {
                    Li.innerHTML = `
                    <input type="checkbox" class="select">
                    <span class="content">${newsData[i].text}</span>
                    <span class="del">
                        <a href="javascript:;" >删除</a>
                        <select name="" id="" >
                            <option value="">提醒</option>
                            <option value="10">10s</option>
                            <option value="15">15s</option>
                            <option value="20">20s</option>
                            <option value="30">30s</option>
                        </select>
                    </span>
                `
                    NO.appendChild(Li)
                }
                target.value = ''
                console.log(Li)
            }
        }
    }
    //函数调用
    getData()
    changes()
    del()
    add()

    // 数据可视化区域
    function Echart() {
        let echart = document.querySelector('.echart')
        let myChart = echarts.init(echart)
        let x = parseInt(num1.innerHTML)
        let y = parseInt(num2.innerHTML)
        let value = 0;
        if (x + y === 0) {
            value = 0;
        } else {
            value = y / (x + y)
        }
        value = Math.floor(value * 100)
        var option = {
            backgroundColor: "transparent",
            title: [
                {
                    text: `{a|${value}%}`,
                    subtext: "今日进度",
                    top: "center",
                    left: "center",
                    subtextStyle: {
                        color: "#fff",
                        fontSize: 23,
                        fontWeight: 600,
                        fontFamily: "PingFangSC-Regular",
                        top: "center"
                    },
                    itemGap: -5, //主副标题间距
                    textStyle: {
                        fontWeight: "normal",
                        rich: {
                            a: {
                                padding: [0, 0, 70, 0],
                                fontWeight: "normal",
                                fontSize: 36,
                                color: "#fff",
                                fontFamily: "DINAlternate-Bold",
                                textShadow: [5, 5, 10, "#7ff06fff"]
                            },
                        }
                    }
                }],
            angleAxis: {
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                min: 0,
                max: 100,
                boundaryGap: ["1000", "100"]
            },
            radiusAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: ['a', 'b', 'c'],
                z: 10
            },
            polar: {
                radius: '100%'
            },
            series: [{
                type: 'bar',
                data: [, , value], //修改数据
                coordinateSystem: 'polar',
                barMaxWidth: 20,
                z: 2,
                name: '',

                color: '#1779ee',
                barGap: '-100%',
            },
            {
                type: "bar",
                data: [, , 100],
                coordinateSystem: 'polar',
                barMaxWidth: 20,
                z: 0,
                name: '',
                color: '#FA742B',
                barGap: '-85%',

            },
            {
                type: 'liquidFill',
                radius: '70%',
                center: ['50%', '50%'],
                color: [
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                    },],
                data: [value, value - 0.1, value - 0.15], // data个数代表波浪数
                backgroundStyle: {
                    borderWidth: 1,
                    borderColor: 'rgba(255, 255, 255, 0)',
                    color: 'rgba(255, 255, 255, 0)',
                },
                outline: {
                    show: false,
                },
                label: {
                    show: false,
                },
            },],
            tooltip: {
                show: false
            },

        };
        myChart.setOption(option)
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    }
    Echart()

    // 提醒
    function Call(){
        let select = document.querySelectorAll('select')
    let contents = document.querySelectorAll('.content')
    let ipts = document.querySelectorAll('.select')
    // 防抖函数 短时间内用户点击多次只会执行最后一次
    function debounce(fn, delay) {
        let t = null;
        return function () {
            if (t != null) {
                clearTimeout(t)
            }
            t = setTimeout(() => {
                fn.call(this)
            }, delay)
        }
    }
    for (let i = 0; i < select.length; i++) {
        select[i].onclick = debounce(function () {
            let time = parseInt(this.value)
            if (ipts[i].checked===false) {
                if (time >= 0) {
                    let timer = setTimeout(function () {
                        alert(contents[i].innerText)
                    }, time * 1000)
                    timer;
                }
            }else{
                alert('任务已经完成啦')
            }
        }, 2000)
    }
    }
    Call()
}