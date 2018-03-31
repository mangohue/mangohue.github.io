

function isPc(){
	//设备检测  
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		// alert('手机端');
	}else{
		// alert('PC端');
		


	}
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
  		micIsPlay:false,
  		musicIsPlay:false,
  		btn_switch:true,
  		selected:"color",
  		rangeBright:100,
  		rangeSpeed:50,
  		tabbar:{
  			color:true,
  			mode:false,
  			music:false,
  			timer:false,
  		},
  		currentColor:{
			r:255,
			g:255,
			b:255,
			a:1,
			color:"#FFFFFF"
		},
		timer:{
			isSingle:true,
			currentTime:"",
			timeingDate:"",
			timeingHour:"",
			repeat:"Single",
			action:true,
			mode:"Dinner Mode",
		},
		tempTimer:{
			isSingle:true,
			currentTime:"",
			timeingDate:"",
			timeingHour:"",
			repeat:"Single",
			action:true,
			mode:"",
			startDate:"",
			startDateSingle:""
		},
		repeat:[
			{class:true, show:"Single"},
			{class:false, show:"Daily"},
			{class:false, show:"Mon"},
			{class:false, show:"Tue"},
			{class:false, show:"Wed"},
			{class:false, show:"Thu"},
			{class:false, show:"Fri"},
			{class:false, show:"Sat"},
			{class:false, show:"Sun"},
		],

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
        			"Dinner Mode","Holiday Mode","Meeting Mode","Party Mode",
        			"Three color jumping change","Seven color jumping change","Three color breathing lamp",
        			"Seven color breathing lamp","Red breathing lamp","Green breathing lamp",
        			"Blue breathing lamp","Yellow breathing lamp","Cyan breathing lamp",
        			"Purple breathing lamp", "White breathing lamp","Red and green breathing lamp",
	      			"Red and blue breathing lamp","Blue and green breathing lamp","Seven color flashing",
	      			"Red flashing","Blue flashing", " Green flashing",
        			"Yellow flashing", "Cyan flashing","purple flashing","White flashing"
        		],
        		className: 'slot',
        		textAlign: 'center',
        		textSize: '10px',
      		}, 
	 	],
	 	music_picker: [{
     		flex: 1,
     		values: [
     			"Jump Blues","Fplk-Rock","Free Jazz","Trance","Pop-Rap","File Music"
     		],
	    	className: 'slot',
      		textAlign: 'center',
      		textSize: '10px',
    	}]
  		
	},
	mounted:function(){
		this.getColorMove();
	},
	methods:{
		//设置亮度
		brightChange:function(value){
			console.log("bright set to " + value);
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
		//灯带开关切换
		btnSwitch:function(e){
			this._data.btn_switch = !this._data.btn_switch;
			if(e == false){
				console.log("open LED");
			}else{
				console.log("close LED");
			}
		},
		//mode页面picker change
		pickerModeChange(picker, values){
			console.log("click "+values[0]);
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
		//设置亮度
		brightChange:function(value){
			console.log("bright set to " + value);
		},
		
		//设置速度
		speedChange:function(value){
			console.log("speed set to " + value);
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

		//music页面picker change
		musicModeChange(picker, values){
			console.log("click "+values[0]);
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

		ensure:function(value){
			console.log(value);
			this._data.tempTimer.timeingHour = value;
		},

		ensureSingle:function(value){
			console.log(value);
			var year = value.getFullYear();
			var month = value.getMonth()+1;
			var day = value.getDate();
			var hour = value.getHours();
			var min = value.getMinutes();
			this._data.tempTimer.timeingDate = (year < 10 ? "0" : "") + year + "-" + (month < 10 ? "0" : "") + month  + "-" +(day < 10 ? "0" : "") + day;
			this._data.tempTimer.timeingHour = (hour < 10 ? "0" : "") + hour + ":"  + (min < 10 ? "0" : "") + min;
		},

		setTimer:function(e){
			this._data.isSetTimer = !this._data.isSetTimer;
			if(e == "go"){
				var currentTime = new Date();
				var year = currentTime.getFullYear();
				var month = currentTime.getMonth()+1;
				var day = currentTime.getDate();
				var hour = currentTime.getHours();
				var min = currentTime.getMinutes();
				
				this._data.tempTimer.timeingDate = year + "-" + (month < 10 ? "0" : "") + month + "-" + ( day < 10 ? "0" : "") + day;
				this._data.tempTimer.timeingHour = (hour < 10 ? "0" : "") + hour + ":" + (min < 10 ? "0" : "") + min;

				this._data.tempTimer.isSingle = this._data.timer.isSingle;
				// this._data.tempTimer.currentTime = this._data.timer.currentTime;
				// this._data.tempTimer.timeingDate = this._data.timer.timeingDate;
				// this._data.tempTimer.timeingHour = this._data.timer.timeingHour;
				this._data.tempTimer.repeat = this._data.timer.repeat;
				this._data.tempTimer.action = this._data.timer.action;
				this._data.tempTimer.mode = this._data.timer.mode;

				this._data.tempTimer.startDateSingle = currentTime;
				this._data.tempTimer.startDate = this._data.tempTimer.timeingHour;

				this.setTimerDate(this._data.tempTimer.repeat);

				this._data.timer.currentTime = this._data.tempTimer.currentTime = this._data.tempTimer.timeingDate + " " +this._data.tempTimer.timeingHour;
			}else if(e == "ok"){
				this._data.timer.isSingle = this._data.tempTimer.isSingle;
				this._data.timer.currentTime = this._data.tempTimer.currentTime;
				this._data.timer.timeingDate = this._data.tempTimer.timeingDate;
				this._data.timer.timeingHour = this._data.tempTimer.timeingHour;
				this._data.timer.repeat = this._data.tempTimer.repeat;
				this._data.timer.action = this._data.tempTimer.action;
				this._data.timer.mode = this._data.tempTimer.mode;
			}
		},

		tiemrBtnClick:function(){
			console.log("timer set action to " + (this._data.timer.action ? "open LED" : "close LED" ));
			this._data.tempTimer.action = !this._data.tempTimer.action;
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

		setTimerDate:function(e){
			for (var temp in this._data.repeat) {
				if( e == this._data.repeat[temp].show){
					this._data.repeat[temp].class = true;
					this._data.tempTimer.repeat = this._data.repeat[temp].show;
					console.log("set timer data to " + this._data.repeat[temp].show);
				}else{
					this._data.repeat[temp].class = false;
				}
			}
			if(e == "Single"){
				this._data.tempTimer.isSingle = true;
			}else{
				this._data.tempTimer.isSingle = false;
			}
		},

		selectTimingTime:function(e){
			if(e==true){
				this.$refs.pickerSingle.open();
			}else{
				this.$refs.picker.open();
			}
		},

		timerModeChange(picker,value){
			console.log("tiemr set mode to "+value[0]);
			this._data.tempTimer.mode = value[0];
		},

		//在色环上滑动
		getColorMove:function(e){
			var that =this;
			var id = new Array("colorCanvas","customCanvas");
			
			for(var i in id){
					document.getElementById(id[i]).addEventListener(
					"touchstart",function(e){
	                    that.getColor(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
	                });
					document.getElementById(id[i]).addEventListener(
					"touchmove",function(e){
		                that.getColor(e.changedTouches[0].pageX,e.changedTouches[0].pageY);
		            });

		            document.getElementById(id[i]).addEventListener(
					"mousedown",function(e){
	                    that.getColor(e.pageX,e.pageY);
	                });
					document.getElementById(id[i]).addEventListener(
					"mousemove",function(e){
		                   that.getColor(e.pageX,e.pageY);
		            });
	            
			}
		},

		tabbarClick:function(e){
			for (var t in this._data.tabbar) {
				if(e == t){
					this._data.tabbar[t] = true;
				}else{
					this._data.tabbar[t] = false;
				}
			}
			if(e == "mode"){
				this._data.pageId = "customCanvas";
			}else if (e == "color") {
				this._data.pageId = "colorCanvas";
			}
		}


	}
})

