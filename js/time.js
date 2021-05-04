'use strict';

function showTime(){
	var date = new Date();
			
	// 年月日
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
		
	// 时分秒
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	
	// 在小于10的数字前加一个‘0’
	hour=checkTime(hour);
	minute=checkTime(minute);
	second=checkTime(second);
		
	// 实时显示
	var element = document.getElementById('time');
	element.innerHTML = '<h1>' + hour + ':' + minute + ':' +  second +'<h2>'+ day + 'th ' + month + ',' + year;		
}
function checkTime(i){
	if(i<10){
		i="0"+i;
	}
	return i;
}
setInterval('showTime()', 10);