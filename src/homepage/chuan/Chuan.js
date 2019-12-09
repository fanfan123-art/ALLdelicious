import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;


var ChuanCss = require('../chuan/Chuan.css');
export default class Chuan extends React.Component {
    render() {
        window.onload = function () {
            var divArr =  document.getElementById('div');
            var size = [
                { "top": 150, "left": 0, "width": 650, "height": 600, "zIndex": 1, "opacity": 0 },
                { "top": 150, "left": 0, "width": 650, "height": 600, "zIndex": 2, "opacity": 40 },
                { "top": 75, "left": 120, "width": 800, "height": 750, "zIndex": 3, "opacity": 70 },
                { "top": 0, "left": 250, "width": 1400, "height": 930, "zIndex": 4, "opacity": 100 },
                { "top": 75, "left":970, "width": 800, "height": 750, "zIndex": 3, "opacity": 70 },
                { "top": 150, "left": 1250, "width": 650, "height": 600, "zIndex": 2, "opacity": 40 },
                { "top": 150, "left": 1250, "width":650, "height": 600, "zIndex": 1, "opacity": 0 }
               
            ];
            var divSum = divArr.length;
            var wrap = document.getElementById('wrap');
            var cont = wrap.firstElementChild || wrap.firstChild;
            var btnArr = wrap.getElementsByTagName('a');
            var falg = true;
            var speed = 7000;
            wrap.onmouseover = function () {
                for (var i = 0; i < btnArr.length; i++) {
                    btnArr[i].style.display = 'block';
                }
                clearInterval(wrap.timer);
            }
            wrap.onmouseout = function () {
                for (var i = 0; i < btnArr.length; i++) {
                    btnArr[i].style.display = 'none';
                }
                wrap.timer = setInterval(function () {
                    move(true);
                }, speed);
            }
            for (var i = 0; i < divSum; i++) {
                var lis = document.createElement('div');
                lis.style.div= 'url(' + divArr[i].path + ')';
                cont.appendChild(lis);
            }
            var liArr = cont.children;
            move();
            wrap.timer = setInterval(function () {
                move(true);
            }, speed);
            btnArr[1].onclick = function () {
                if (falg) {
                    move(true);
                }
            }
            btnArr[0].onclick = function () {
                if (falg) {
                    move(false);
                }
            }
            function move(bool) {
                if (bool != undefined) {
                    if (bool) {
                        size.unshift(size.pop());
                    } else {
                        size.push(size.shift());
                    }
                }
                for (var i = 0; i < liArr.length; i++) {
                    animate(liArr[i], size[i], function () {
                        falg = true;
                    });
                }
            }
        }
        function getStyle(obj, attr) {
            return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, null)[attr];
        }

        function animate(obj, json, fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var bool = true;
                for (var k in json) {
                    var leader;
                    if (k == 'opacity') {
                        if (getStyle(obj, k) == undefined) {
                            leader = 100;
                        } else {
                            leader = parseInt(getStyle(obj, k) * 100);
                        }
                    } else {
                        leader = parseInt(getStyle(obj, k)) || 0;
                    }
                    var step = (json[k] - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    if (k == 'zIndex') {
                        obj.style[k] = json[k];
                    } else if (k == 'opacity') {
                        obj.style[k] = leader / 100;
                        obj.style.filter = 'alpha(opacity=' + leader + ')';
                    } else {
                        obj.style[k] = leader + 'px';
                    }
                    if (json[k] != leader) {
                        bool = false;
                    }
                }
                if (bool) {
                    clearInterval(obj.timer);
                    if (fn) {
                        fn();
                    }
                }
            }, 10);
        }

        return (
            <Content style={{ marginTop: 64 }}>
            <div className={ChuanCss.wrap} id={'wrap'}>
                <ul className={ChuanCss.content01}>
                    <div id={'div'}>1</div>
                    <div id={'div'}>2</div>
                    <div id={'div'}>3</div>
                    <div id={'div'}>4</div>
                    <div id={'div'}>3</div>
                    <div id={'div'}>2</div>
                    <div id={'div'}>1</div>
                </ul>
                <a href="javascript:;" className={ChuanCss.prev}>&#60;</a>
                <a href="javascript:;" className={ChuanCss.next}>&#62;</a>
            </div>
            </Content>
        )
    }
}
