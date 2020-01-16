function move() {//根据受力改变坐标
    // let after = [];
    // //拷贝一份
    // for (let i = 0; i < stars.length; i++) {
    //     if (stars[i] == null) {
    //         continue;
    //     }
    //     after.push(
    //         {
    //             mass: stars[i].mass,
    //             radius: stars[i].radius,
    //             speed: {
    //                 x: stars[i].speed.x,
    //                 y: stars[i].speed.y
    //             },
    //             coordinate: {
    //                 x: stars[i].coordinate.x,
    //                 y: stars[i].coordinate.y
    //             }
    //         },
    //     )
    // }
    for (let i = 0; i < stars.length; i++) {
        
        if ( stars[i] == null) {
            continue;
        }
        for (let k = 0; k < stars.length; k++) {
            if ( stars[k] == null) {
                continue;
            }
            if (k == i) {
                continue;
            }
            let x = stars[i].coordinate.x - stars[k].coordinate.x;
            let y = stars[i].coordinate.y - stars[k].coordinate.y;
            let r = Math.sqrt(x * x + y * y);
            let xf, yf;//x和y方向的力
            if (r <= stars[i].radius + stars[k].radius) {//如果碰撞的话
                if(stars[i].mass<stars[k].mass){
                    continue;
                }
                xf = - stars[k].mass * stars[k].speed.x;
                yf = - stars[k].mass * stars[k].speed.y;
                // xf = 0;
                // yf = 0;
                // stars[i].speed.x = stars[i].mass > stars[k].mass ? stars[i].speed.x : stars[k].speed.x;
                // stars[i].speed.y = stars[i].mass > stars[k].mass ? stars[i].speed.y : stars[k].speed.y;
                stars[i].mass += stars[k].mass;
                // after[i].radius += stars[k].radius;
                stars[i].radius = Math.sqrt(stars[i].radius * stars[i].radius + stars[k].radius * stars[k].radius);
                stars[k] = null;


            } else {
                let f = F(stars[i].mass, stars[k].mass, r);
                xf = f * x / r;
                yf = f * y / r;
            }
            stars[i].speed.x -= xf / stars[i].mass;
            stars[i].speed.y -= yf / stars[i].mass;
        }
        stars[i].coordinate.x += stars[i].speed.x;
        stars[i].coordinate.y += stars[i].speed.y;
    }
}

function display() {//根据坐标现实
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 10000, 10000);
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] == null) {
            continue;
        }
        ctx.fillStyle = "rgb(115, 115, 209)";
        ctx.beginPath();
        let r = stars[i].radius;
        ctx.arc(stars[i].coordinate.x, stars[i].coordinate.y, r > 2 ? r : 2, 0, 2 * Math.PI);
        ctx.fill();
    }
}
function F(m1, m2, r) {//传入两物体质量和其距离 返回引力大小 如果r为0 则返回碰撞时的力
    const G = 6.67;
    return G * (m1 * m2) / (r * r);
}
//...........
display();
window.onclick = start;
let time;
let speed = 1000 / 60;
let t = () => {
    // console.log(stars[1].coordinate);
    move();
    display();
    clearTimeout(time);
    time = setTimeout(t, speed);
}
function start() {
    time = time = setTimeout(t, speed);
    // window.onclick = stop;
}
function stop() {
    clearTimeout(time);
    window.onclick = start;
}
let mx = 0;
let my = 0;
window.onmousedown = (e) => {
    mx = e.clientX;
    my = e.clientY;
    window.onmousemove = mousemove;
}
function mousemove(e) {
    let x = mx - e.clientX;
    let y = my - e.clientY;
    mx = e.clientX;
    my = e.clientY;
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] == null) {
            continue;
        }
        stars[i].coordinate.x -= x;
        stars[i].coordinate.y -= y;
    }
}
function touchmove(e) {
    // console.log(e);
    let x = mx - e.touches[0].clientX;;
    let y = my - e.touches[0].clientY;
    mx = e.touches[0].clientX;;
    my = e.touches[0].clientY;
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] == null) {
            continue;
        }
        stars[i].coordinate.x -= x;
        stars[i].coordinate.y -= y;
    }
}
window.onmouseup = (e) => {
    window.onmousemove = null;
}

window.ontouchstart = e => {
    // console.log(e.touches[0].clientX);
    mx = e.touches[0].clientX;
    my = e.touches[0].clientY;
    window.ontouchmove = touchmove;
}
window.ontouchend = e => {
    window.onmousemove = null;
}