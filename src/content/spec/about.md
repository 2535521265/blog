# 关于
这是 [我的博客](https://github.com/2535521265/blog) 站点，它基于 [Fuwari](https://github.com/saicaca/fuwari) 构建。

## 主要给大家分享一些我喜欢的有趣的事物和记录一下自己的学习过程

<!DOCTYPE html>
<html>
<head>
    <title>点击特效</title>
    <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> -->
    <script src="https://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>

<style>
/* .unique-div {
    width: 50px;
    height: 50px;
    position: fixed;
    background-size: 100%;
    background-image: url(https://postimage.me/images/2024/08/21/sss.jpeg);
} */
/* 按钮基础样式 */
.bubbly-button {
	font-family:'Helvetica','Arial',sans-serif;
	display:inline-block;
	font-size:1.5em;
	padding:0.5em 1em;
	margin-top:5px;
    margin-right: 5px;
	-webkit-appearance:none;
	appearance:none;
	background-color:#ff3de8;
	color:white;
	border-radius:4px;
	border:none;
	cursor:pointer;
	position:relative;
	transition:transform ease-in 0.1s,box-shadow ease-in 0.25s;
	box-shadow:0 2px 15px rgba(255,0,251,0.5);
}
.bubbly-button:focus {
	outline:0;
}
.bubbly-button:before,.bubbly-button:after {
	position:absolute;
	content:'';
	display:block;
	width:140%;
	height:100%;
	left:-20%;
	z-index:-1000;
	transition:all ease-in-out 0.5s;
	background-repeat:no-repeat;
}
.bubbly-button:before {
	display:none;
	top:-75%;
	background-image:radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,transparent 20%,#ff0081 20%,transparent 30%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,transparent 10%,#ff0081 15%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%);
	background-size:10% 10%,20% 20%,15% 15%,20% 20%,18% 18%,10% 10%,15% 15%,10% 10%,18% 18%;
}
.bubbly-button:after {
	display:none;
	bottom:-75%;
	background-image:radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,transparent 10%,#ff0081 15%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%),radial-gradient(circle,#ff0081 20%,transparent 20%);
	background-size:15% 15%,20% 20%,18% 18%,20% 20%,15% 15%,10% 10%,20% 20%;
}
.bubbly-button:active {
	transform:scale(0.9);
	background-color:#e60074;
	box-shadow:0 2px 25px rgba(255,0,130,0.2);
}
.bubbly-button.animate:before {
	display:block;
	animation:topBubbles ease-in-out 0.75s forwards;
}
.bubbly-button.animate:after {
	display:block;
	animation:bottomBubbles ease-in-out 0.75s forwards;
}
@keyframes topBubbles {
	0% {
	background-position:5% 90%,10% 90%,10% 90%,15% 90%,25% 90%,25% 90%,40% 90%,55% 90%,70% 90%;
}
50% {
	background-position:0% 80%,0% 20%,10% 40%,20% 0%,30% 30%,22% 50%,50% 50%,65% 20%,90% 30%;
}
100% {
	background-position:0% 70%,0% 10%,10% 30%,20% -10%,30% 20%,22% 40%,50% 40%,65% 10%,90% 20%;
	background-size:0% 0%,0% 0%,0% 0%,0% 0%,0% 0%,0% 0%;
}
}@keyframes bottomBubbles {
	0% {
	background-position:10% -10%,30% 10%,55% -10%,70% -10%,85% -10%,70% -10%,70% 0%;
}
50% {
	background-position:0% 80%,20% 80%,45% 60%,60% 100%,75% 70%,95% 60%,105% 0%;
}
100% {
	background-position:0% 90%,20% 90%,45% 70%,60% 110%,75% 80%,95% 70%,110% 10%;
	background-size:0% 0%,0% 0%,0% 0%,0% 0%,0% 0%,0% 0%;
}
}
.disabled {
    color: grey;
    pointer-events: none; /* 禁止点击 */
}
.hidden-button {
  display: none;
}
.horizon {
    display: flex;
    align-items: center;
}
#message {
  margin-left: 15px; /* 在消息 div 左侧增加20像素的外边距 */
  font-size: 30px;
}
.text-flowLight {
	position:relative;
	background-image:-webkit-linear-gradient(left,red,blue,green 100%);
	-webkit-text-fill-color:transparent;
	-webkit-background-clip:text;
	-webkit-background-size:200% 100%;
	-webkit-animation:masked-animation 5s forwards linear infinite;
	font-weight:700;
	white-space:nowrap
}
@keyframes masked-animation {
	from {
	background-position:0 0
}
to {
	background-position:-200% 0
}
}

#mycanvas {
	margin-top: 10px;
    display:none;
}

</style>
</head>
<body>

#### 点一下试试看
<div class="horizon">
    <button id="fireworkButton" class="bubbly-button" onclick="firework()">烟花</button>
    <button id="wordsButton" class="bubbly-button" onclick="words()">赞美</button>
    <!-- <button id="avatarButton" class="bubbly-button" onclick="avatar()">作者</button> -->
    <div id="message" class="text-flowLight"></div>
</div>
<canvas id="mycanvas" height="500" width="800"></canvas>

<script>
function firework() {  //点击烟花特效
    let balls = [];
    let longPressed = false;
    let longPress;
    let multiplier = 0;
    let width, height;
    let origin;
    let normal;
    let ctx;
    const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
    const pointer = document.createElement("span");
    pointer.classList.add("pointer");
    document.body.appendChild(pointer);

    if (canvas.getContext && window.addEventListener) {
        ctx = canvas.getContext("2d");
        updateSize();
        window.addEventListener('resize', updateSize, false);
        loop();
        window.addEventListener("mousedown", function(e) {
            pushBalls(randBetween(10, 20), e.clientX, e.clientY);
            document.body.classList.add("is-pressed");
            longPress = setTimeout(function() {
                document.body.classList.add("is-longpress");
                longPressed = true;
            }, 500);
        }, false);
        window.addEventListener("mouseup", function(e) {
            clearInterval(longPress);
            if (longPressed == true) {
                document.body.classList.remove("is-longpress");
                pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
                longPressed = false;
            }
            document.body.classList.remove("is-pressed");
        }, false);
        window.addEventListener("mousemove", function(e) {
            let x = e.clientX;
            let y = e.clientY;
            pointer.style.top = y + "px";
            pointer.style.left = x + "px";
        }, false);
    } else {
        console.log("canvas or addEventListener is unsupported!");
    }


    function updateSize() {
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.scale(2, 2);
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
        origin = {
            x: width / 2,
            y: height / 2
        };
        normal = {
            x: width / 2,
            y: height / 2
        };
    }
    class Ball {
        constructor(x = origin.x, y = origin.y) {
            this.x = x;
            this.y = y;
            this.angle = Math.PI * 2 * Math.random();
            if (longPressed == true) {
                this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
            } else {
                this.multiplier = randBetween(6, 12);
            }
            this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
            this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
            this.r = randBetween(8, 12) + 3 * Math.random();
            this.color = colours[Math.floor(Math.random() * colours.length)];
        }
        update() {
            this.x += this.vx - normal.x;
            this.y += this.vy - normal.y;
            normal.x = -2 / window.innerWidth * Math.sin(this.angle);
            normal.y = -2 / window.innerHeight * Math.cos(this.angle);
            this.r -= 0.3;
            this.vx *= 0.9;
            this.vy *= 0.9;
        }
    }

    function pushBalls(count = 1, x = origin.x, y = origin.y) {
        for (let i = 0; i < count; i++) {
            balls.push(new Ball(x, y));
        }
    }

    function randBetween(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    function loop() {
        ctx.fillStyle = "rgba(255, 255, 255, 0)";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.r < 0) continue;
            ctx.fillStyle = b.color;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
            ctx.fill();
            b.update();
        }
        if (longPressed == true) {
            multiplier += 0.2;
        } else if (!longPressed && multiplier >= 0) {
            multiplier -= 0.4;
        }
        removeBall();
        requestAnimationFrame(loop);
    }

    function removeBall() {
        for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
                balls.splice(i, 1);
            }
        }
    }
    
}

function words(){//文字赞美
    var a_idx = 0,
        b_idx = 0;
    c_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var a = new Array("欢迎您", "你是个好人", "你真好", "你真棒", "真可爱", "你最美", "喜欢你", "真聪明", "爱你哟", "好厉害", "你真帅", "祝福你"),
                b = new Array("#09ebfc", "#ff6651", "#ffb351", "#51ff65", "#5197ff", "#a551ff", "#ff51f7", "#ff518e", "#ff5163", "#efff51"),
                c = new Array("12", "14", "16", "18", "20", "22", "24", "26", "28", "30");
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            b_idx = (b_idx + 1) % b.length;
            c_idx = (c_idx + 1) % c.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "font-size": c[c_idx] + "px",
                "color": b[b_idx]
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            }, 1500, function() {
                $i.remove();
            });
        });
    });
    var _hmt = _hmt || [];
}

// function avatar(){//图片拖动效果
//     var num = 0;
//     var n = 0;
//     document.onmousedown = function() {
//         this.onmousemove = function(evt) {
//             var e = evt || window.evt;
//             var x = e.pageX - 25;
//             var y = e.pageY - 25;
//             var oDiv = document.createElement('div');
//             oDiv.className = 'unique-div';
            
//             n = parseInt(num / 20);
//             oDiv.style.cssText = "top: " + y + "px;left:" + x + "px";
//             document.body.appendChild(oDiv);
//             num++;
//             if (num >= 400) {
//                 num = 0;
//             }
//             move(oDiv, {
//                 width: 0,
//                 height: 0,
//                 top: y - 100
//             },
//             1000,
//             function() {
//                 this.parentNode.removeChild(this);
//             });
//         }
//         this.onmouseup = function() {
//             this.onmousemove = null;
//             this.onmouseup = null;
//         }
//     }

//     function move(obj, mJson, time, fn) {
//         var startTime = new Date();
//         var startVal = {};
//         for (var key in mJson) {
//             startVal[key] = getStyle(obj, key);
//         }
//         var timer = setInterval(function() {
//             var nowTime = new Date();
//             var prop = (nowTime - startTime) / time;
//             if (prop >= 1) {
//                 prop = 1;
//                 clearInterval(timer);
//                 fn && fn.call(obj);
//             }
//             for (var key in mJson) {
//                 obj.style[key] = startVal[key] + prop * (mJson[key] - startVal[key]) + 'px';
//             }
//         },
//         13)
//     }

//     function getStyle(obj, attr) {
//         if (attr == 'width') {
//             return obj.clientWidth;
//         } else if (attr == 'height') {
//             return obj.clientHeight;
//         } else if (attr == 'left') {
//             return obj.offsetLeft;
//         } else if (attr == 'top') {
//             return obj.offsetTop;
//         } else {
//             return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
//         }
//     }
// }


var animateButton = function(e) { //按钮动画
    e.preventDefault;
    // reset animation 复位动画
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function() {
        e.target.classList.remove('animate');
    }, 700);
};

var btn = document.getElementsByClassName("bubbly-button");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', animateButton, false);
}

// 定义一个数组来存储按钮元素
var buttons = document.querySelectorAll('.bubbly-button');

// 为每个按钮添加点击事件监听器
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // 重置所有按钮
        buttons.forEach(function(btn) {
            // btn.removeAttribute('onclick');
            btn.disabled = false;
            btn.classList.remove('disabled');
        });
    // buttons.forEach(b => b.classList.add('hidden-button'));// 隐藏所有按钮的点击效果
    // this.classList.remove('hidden-button');// 显示当前按钮的点击效果

        // 为当前点击的按钮添加禁用状态

        this.disabled = true;
        this.classList.add('disabled');
    });
});

document.getElementById('fireworkButton').addEventListener('click', function() {
    document.getElementById('message').textContent = '请你看烟花';
    document.getElementById('mycanvas').style.display = 'block';
});
document.getElementById('wordsButton').addEventListener('click', function() {
    document.getElementById('message').textContent = '点一点试试看！';
});
// document.getElementById('avatarButton').addEventListener('click', function() {
//     document.getElementById('message').textContent = '按住鼠标拖动一下试试！';
// });

//放烟花
var RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
     window.setTimeout(callback, 1000 / 60);
 };
 var can = document.getElementById("mycanvas")
 var ctx = can.getContext("2d");
 var height = can.height;
 var width = can.width;
 var fires = [];
 var booms = [];
 var edbooms = []
 var i = 0,
     j = 100;

 function fireBoom() {
     booms.forEach(function(boom, index) {
         boom.b += 1;
         if (boom.b > 50) {
             edbooms.push(booms[index])
             booms.splice(index, 1);
             return;
         }
         var len = boom.bl.length;

         var x = 0,
             y = 0;
         var bl = 0;
         for (var i = 0; i < len; i++) {
             boom.bl[i] += boom.bv[i];
             ctx.beginPath();
             x = boom.x + Math.cos(boom.pi[i]) * boom.bl[i];
             y = boom.y + Math.sin(boom.pi[i]) * boom.bl[i];
             ctx.fillStyle = ctx.shadowColor = "#50" + boom.color;
             ctx.fillRect(x, y, 4, 4);
             ctx.fill();
         }
     })
 }

 function fireUp() {
     fires.forEach(function(fire, index) {
         ctx.beginPath();
         fire.x += fire.kx;
         fire.v -= 0.5;
         if (fire.y < fire.by) {
             var len = 32;
             var boom = [];
             var bl = [];
             var pi = [];
             var p = Math.PI * 2 / len;
             for (var i = 0; i < len; i++) {
                 boom.push((1 + Math.random()))
                 bl.push(0)
                 pi.push((i * p + p * Math.random()))
             }
             booms.push({
                 x: fire.x,
                 y: fire.y,
                 b: 0,
                 bv: boom,
                 bl: bl,
                 pi: pi,
                 color: parseInt(1000 + 9000 * Math.random())
             });
             fires.splice(index, 1)
             return;
         }
         fire.y = fire.y - fire.v * 0.05;
         ctx.fillStyle = ctx.shadowColor = "#50FFFF";
         ctx.fillRect(fire.x, fire.y, 4, 4);
         ctx.fill();
     })
 }
 animate()
 setInterval(addFire, 500)

 function animate() {
     ctx.globalCompositeOperation = 'source-over';
     ctx.shadowBlur = 0;
     ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', 0.03);
     ctx.fillRect(0, 0, width, height);
     ctx.globalCompositeOperation = 'lighter';
     fireUp();
     fireBoom();
     RAF(animate);
 }

 function addFire() {
     var fire = {
         x: width / 4 + Math.random() * (width / 2),
         y: height,
         v: 100 + 20 * Math.random(),
         kx: -1 + Math.random() * 2,
         by: 100 + 50 * Math.random(),
     }
     fires.push(fire);
 }

</script>

</body>
</html>