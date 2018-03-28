
//设备检测  
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
	// alert('手机端');
}else{
	// alert('PC端');
	// var page= document.getElementById("body");
	// page.className="pc-page";
}

function setNormalHeight(){
	var normal = document.getElementsByClassName("normal");
	var height = window.getComputedStyle(normal[0]).width;
	for(var i = 0; i<normal.length; i++){
		normal[i].style.height = height;
		normal[i].style.width = height;
	}
}
setNormalHeight();


new Vue({
 	el: '#page',
  data:{
  		pageId:"colorCanvas",
  		isSetTimer:false,
		musicIsPlay:false,
		micIsPlay:false,
		timer_btn_show:true,
		tempTimer:{},
		btn_switch:true,
		rangeBright:100,
		rangeSpeed:50,
		currentColor:{
			r:255,
			g:255,
			b:255,
			a:1,
			color:"#FFFFFF"
		},
		isSingleTime:false,
		timerMode:{
			single:true,
			daily:false,
			mon:false,
			tue:false,
			wed:false,
			thu:false,
			fri:false,
			sat:false,
			sun:false
		},
		timer:{
			currentTime:1,
			time:"",
			singleTime:"",
			day:"单次",
			action:false,
			mode:"晚餐模式",
			open:false,
			startDate:"",
			singleStartDate:"",
		},
		normal:[ 
			{r:255, g:0 ,b:0, a:1, color:"#FF0000"},
			{r:0, g:255 ,b:0, a:1, color:"#00FF00"},
			{r:0, g:0 ,b:255, a:1, color:"#0000FF"},
			{r:255, g:255 ,b:0, a:1, color:"#FFFF00"},
			{r:255, g:0 ,b:255, a:1, color:"#FF00FF"},
			{r:0, g:255 ,b:255, a:1, color:"#00FFFF"},
			{r:255, g:255 ,b:255, a:1, color:"#FFFFFF"}
		],
		color_diy:[],
		color_custom:[],
		color_picker: [
      		{
        		flex: 1,
        		values: [
        			"晚餐模式","假期模式","会客模式","派对模式","三色跳变","七色跳变","三色渐变","红色渐变","蓝色渐变",
        			"绿色渐变","黄色渐变","青色渐变","紫色渐变","白色渐变","红绿渐变","红蓝渐变","绿蓝渐变","七色闪变",
        			"红色闪变","蓝色闪变","绿色闪变","黄色闪变","青色闪变","紫色闪变","白色闪变"
        		],
        		className: 'slot',
        		textAlign: 'center',
        		textSize: '10px',
      		}, 
	 	],
  		changeMode:function(e){
			var changeMode = document.getElementsByClassName("change-mode");
			changeMode[0].className="change-mode change-mode-left";
			changeMode[1].className="change-mode"
			changeMode[2].className="change-mode change-mode-right"
			if(e == "jump"){
				changeMode[0].className="change-mode change-mode-left change-mode-true";
				console.log("change to jumping");
			}else if(e == "breath"){
				changeMode[1].className="change-mode change-mode-true";
				console.log("change to breathing");
			}else if(e == "falsh"){
				changeMode[2].className="change-mode change-mode-right change-mode-true";
				console.log("change to falshing");
			}
		},
		music_picker: [
    	{
     		flex: 1,
     		values: [
     			"跳跃蓝调","民谣摇滚","自由爵士","迷幻舞曲","流行说唱","电影原声"
     		],
	    	className: 'slot',
      	textAlign: 'center',
      	textSize: '10px',
    	},  
		]
	},

	mounted:function(){
		this.getColorMove();
	},

	methods:{
		tabClick:function(tabName){
			var tab = document.getElementsByClassName("f-tab");
			var tabImg = document.getElementsByClassName("f-img");
			var body_tab = document.getElementsByClassName("body-tab");
					
			tabImg[0].src="../images/try/tab_color_false.png";
			tabImg[1].src="../images/try/tab_mode_false.png";
			tabImg[2].src="../images/try/tab_music_false.png";
			tabImg[3].src="../images/try/tab_timer_false.png";
					
			for (var i= 0;i<tab.length;i++) { 
				if(tab[i].dataset.tab == tabName){ 
					tab[i].lastElementChild.className = "tab-txt-true"
					body_tab[i].hidden="";
				}else {
					tab[i].lastElementChild.className = "tab-txt-false"
					body_tab[i].hidden="hidden";
				}
			}
			var btn = document.getElementById("btn-switch");
			if(tabName == "timer"){
				btn.hidden="hidden";
			}else{
				btn.hidden="";
			}
					
			if(tabName == "color"){
				tabImg[0].src="../images/try/tab_color_true.png";
				this._data.pageId = "colorCanvas";
			}else if(tabName == "mode"){
				tabImg[1].src="../images/try/tab_mode_true.png";
				this._data.pageId = "customCanvas";
			}else if(tabName == "music"){
				tabImg[2].src="../images/try/tab_music_true.png";
			}else if(tabName == "timer"){
				tabImg[3].src="../images/try/tab_timer_true.png";
			}
		},
		tabTitle:function(e){
			var classic = document.getElementById("classic");
			var custom = document.getElementById("custom");
			var tabTitleClassic = document.getElementById("tab-title-classic");
			var tabTitleCustom = document.getElementById("tab-title-custom");
			var modeCurrent = document.getElementById("custom-current-color");
			if(e == "classic"){
				classic.hidden="";
			custom.hidden="hidden";
			tabTitleClassic.className="tab-title-left-true";
				tabTitleCustom.className="tab-title-right-flase";
				modeCurrent.hidden="hidden";
			}else if(e == "custom"){
				classic.hidden="hidden";
				custom.hidden="";
				tabTitleClassic.className="tab-title-left-flase";
				tabTitleCustom.className="tab-title-right-true";
				modeCurrent.hidden="";
			}
			var tabtitleMusic = document.getElementById("tab-title-music");
			var tabtitleMic = document.getElementById("tab-title-mic");
			var musicMain = document.getElementById("music-main");
			var micMain = document.getElementById("mic-main");
			if(e == "music"){
				musicMain.hidden="";
				micMain.hidden="hidden";
				tabtitleMusic.className="tab-title-left-true";
				tabtitleMic.className="tab-title-right-flase";
			}else if(e == "mic"){
				musicMain.hidden="hidden";
				micMain.hidden="";
				tabtitleMusic.className="tab-title-left-flase";
				tabtitleMic.className="tab-title-right-true";
			}
		},
		//音乐暂停开始
		musicChange:function(e){
			if(e == "pre"){
				console.log("music pre");
				this._data.musicIsPlay = true;
			}else if(e == "start"){
				this._data.musicIsPlay = !this._data.musicIsPlay;
				console.log("music start");
			}else if(e == "stop"){
				this._data.musicIsPlay = !this._data.musicIsPlay;
				console.log("music stop");
			}else if(e == "next"){
				console.log("music next");
				this._data.musicIsPlay = true;
			}
		},
		
		//mic暂停开始
		micChange:function(e){
			 this._data.micIsPlay = !this._data.micIsPlay;
			 if(e == true){
			 	console.log("mic stop");
			 }else{
			 	console.log("mic start");
			 }
		},
		
		//灯带开关切换
		btnSwitch:function(e){
			this._data.btn_switch = !this._data.btn_switch;
			if(e == false){
				console.log("open LED");
			}else{
				console.log("close LED");
			}
		},
		
		//点击color页面normal颜色
		normalColor: function (index){
			this._data.currentColor.r = this._data.normal[index].r;
			this._data.currentColor.g = this._data.normal[index].g;
			this._data.currentColor.b = this._data.normal[index].b;
			this._data.currentColor.a = this._data.normal[index].a;
			this._data.currentColor.color = this._data.normal[index].color;
			console.log("set color to "+ this._data.normal[index].color);
		},
		
		//mode页面picker change
		pickerModeChange(picker, values){
			console.log("click "+values[0]);
		},
		
		//music页面picker change
		musicModeChange(picker, values){
			console.log("click "+values[0]);
		},
		
		//设置亮度
		brightChange:function(value){
			console.log("bright set to " + value);
		},
		
		//设置速度
		speedChange:function(value){
			console.log("speed set to " + value);
		},
		
		//切换setTimer页面
		setTimer:function(e){
			this._data.isSetTimer = !this._data.isSetTimer;
			if(e == "go"){
				this._data.tempTimer = this._data.timer;
				var currentTime = new Date();
				var year = currentTime.getFullYear();
				var month = currentTime.getMonth()+1;
				var day = currentTime.getDate();
				var hour = currentTime.getHours();
				var min = currentTime.getMinutes();
				this._data.timer.currentTime = year + "-" + (month < 10 ? "0" : "") + month + "-" + ( day < 10 ? "0" : "") + day + " " + ( hour < 10 ? "0" : "") + hour + ":" + ( min < 10 ? "0" : "") + min;
				this._data.timer.time = (hour < 10 ? "0" : "") + hour + ":" + (min < 10 ? "0" : "") + min;
				this._data.timer.singleTime = this._data.timer.currentTime;
				this._data.timer.singleStartDate = currentTime;
				this._data.timer.startDate = this._data.timer.time;

			}else if(e == "back"){
				this._data.timer = this._data.tempTimer;
			}else if(e == "ok"){
				this._data.timer.open = true;
			}
		},
		
		//set timer 页面btnChange
		timerBtnChange:function(e){
			this._data.timer_btn_show = !this._data.timer_btn_show;
			if(e == true){
				console.log("set timer open!");
				this._data.timer.action = true;
			}else{
				console.log("set timer close!");
				this._data.timer.action = false;
			}
		},
		
		//timer 页面的mode
		timerModeChange:function(e){
			console.log("set timer mode to "+e);
			for (var mode in this._data.timerMode) {
				if( mode == e){
					this._data.timerMode[mode] = true;
				}else{
					this._data.timerMode[mode] = false;
				}
				
			}
			this._data.timer.day = e;
			if(e == "single"){
				this._data.isSingleTime = false;
			}else{
				this._data.isSingleTime = true;
			}
		},
		
		//set timer day
		timerPickerModeChange(picker,value){
			console.log("timer set day to " + value);
			this._data.timer.mode = value;
		},
		
		selectTime:function(e){
			if(e == true){
				this.$refs.pickerSingle.open();
			}else if(e == false){
				this.$refs.picker.open();
			}
			
		},

		ensure:function(value){
			this._data.timer.time = value;
			this._data.timer.singleTime = (this._data.timer.singleTime).substr(0,11) + value;
		},

		ensureSingle:function(value){
			var year = value.getFullYear();
			var month = value.getMonth()+1;
			var day = value.getDate();
			var hour = value.getHours();
			var min = value.getMinutes();
			this._data.timer.singleTime = year + "-" + (month < 10 ? "0" : "") + month + "-" + ( day < 10 ? "0" : "") + day + " " + ( hour < 10 ? "0" : "") + hour + ":" + ( min < 10 ? "0" : "") + min;
			this._data.timer.time = (hour < 10 ? "0" : "") + hour + ":" + (min < 10 ? "0" : "") + min;
			
		},

		//获取颜色
		getColor:function(pageX,pageY){
			// console.log("getColor");
			// console.log( "e.pageX=" + e.pageX + "-->" + "e.pageY=" + e.pageY);
			var canvasWidth = document.getElementById(this._data.pageId).clientHeight;

			var c = document.getElementById(this._data.pageId);
			var canvasX = Math.floor((pageX - c.offsetLeft) * (420/canvasWidth) );
			var canvasY = Math.floor((pageY - c.offsetTop) * (420/canvasWidth) );
			// console.log( "canvasOffsetX=" + c.offsetLeft + "-->" + "canvasOffsetY=" + c.offsetTop);
			// console.log("canvasX：" + canvasX + "-->" + "canvasY:" + canvasY );
			var colorData = document.getElementById(this._data.pageId).getPixelColor(canvasX, canvasY);
			
			console.log("set color to " + colorData.hex);

			if(colorData.hex != "#000000"){
				this._data.currentColor.r = colorData.r;
				this._data.currentColor.g = colorData.g;
				this._data.currentColor.b = colorData.b;
				this._data.currentColor.a = colorData.a;
				this._data.currentColor.color = colorData.hex;
				// console.log(this._data.currentColor);
			}
		},

		//保存颜色
		saveColor:function(e){
			var tempColor = new Array();
			tempColor.r = this._data.currentColor.r;
			tempColor.g = this._data.currentColor.g;
			tempColor.b = this._data.currentColor.b;
			tempColor.a = this._data.currentColor.a;
			tempColor.color = this._data.currentColor.color;

			if(e == "color"){
				if(this._data.color_diy.length < 7){
					this._data.color_diy.push(tempColor);
				}else if(this._data.color_diy.length = 7){
					this._data.color_diy.splice(length-1, 1 , tempColor);
				}
			}else if(e == "custom"){
				if(this._data.color_custom.length < 7){
					this._data.color_custom.push(tempColor);
				}else if(this._data.color_custom.length = 7){
					this._data.color_custom.splice(length-1, 1 , tempColor);
				}
			}
			
		},

		//点击color页面diy颜色
		colorDiyClick:function(index){
			this._data.currentColor.r = this._data.color_diy[index].r;
			this._data.currentColor.g = this._data.color_diy[index].g;
			this._data.currentColor.b = this._data.color_diy[index].b;
			this._data.currentColor.a = this._data.color_diy[index].a;
			this._data.currentColor.color = this._data.color_diy[index].color;
		},

		//在色环上滑动
		getColorMove:function(e){
			var that =this;
			document.getElementById("colorCanvas").addEventListener(
				"touchstart",function(e){
                    that.getColor(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
                }
			);
			document.getElementById("colorCanvas").addEventListener(
				"touchmove",function(e){
                    that.getColor(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
                }
			);
			document.getElementById("customCanvas").addEventListener(
				"touchstart",function(e){
                    that.getColor(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
                }
			);
			document.getElementById("customCanvas").addEventListener(
				"touchmove",function(e){
                    that.getColor(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
                }
			);
			document.getElementById("colorCanvas").addEventListener(
				"mousedown",function(e){
                    that.getColor(e.pageX,e.pageY);
                }
			);
			document.getElementById("colorCanvas").addEventListener(
				"mousemove",function(e){
                    that.getColor(e.pageX,e.pageY);
                }
			);
			document.getElementById("customCanvas").addEventListener(
				"mousedown",function(e){
                    that.getColor(e.pageX,e.pageY);
                }
			);
			document.getElementById("customCanvas").addEventListener(
				"mousemove",function(e){
                    that.getColor(e.pageX,e.pageY);
                }
			);

		},

		

		
	}
})
