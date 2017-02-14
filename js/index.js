/*
* @Author: LarryZhou
* @Date:   2017-02-14 19:16:29
* @Last Modified by:   LarryZhou
* @Last Modified time: 2017-02-14 19:24:09
*/

'use strict';
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
ctx.strokeRect(100, 100, 400, 300);
ctx.stroke();
ctx.beginPath();
ctx.arc(100, 100, 100,0,2*Math.PI);
ctx.fillStyle="blue";
ctx.fill();