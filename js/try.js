	
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
  		isSetTimer:false,
		musicIsPlay:false,
		micIsPlay:false,
		timer_btn_show:true,
		btn_switch:true,
		rangeBright:100,
		rangeSpeed:50,
		currentColor:"#FFFFFF",
		timerMode:{
			single:false,
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
			time:"",
			day:"Single",
			action:false,
			mode:"Dinner Mode"
		},
		normal:[ 
			{color:"#FF0000"},
			{color:"#00FF00"},
			{color:"#0000FF"},
			{color:"#FFFF00"},
			{color:"#FF00FF"},
			{color:"#00FFFF"},
			{color:"#FFFFFF"}
		],
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
     			"Jump Blues","Fplk-Rock","Free Jazz","Trance","Pop-Rap","File Music"
     		],
	    	className: 'slot',
      	textAlign: 'center',
      	textSize: '10px',
    	}, 
		]
	},
	methods:{
		tabClick:function(tabName){
			var tab = document.getElementsByClassName("f-tab");
			var tabImg = document.getElementsByClassName("f-img");
			var body_tab = document.getElementsByClassName("body-tab");
					
			tabImg[0].src="images/try/tab_color_false.png";
			tabImg[1].src="images/try/tab_mode_false.png";
			tabImg[2].src="images/try/tab_music_false.png";
			tabImg[3].src="images/try/tab_timer_false.png";
					
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
				tabImg[0].src="images/try/tab_color_true.png";
			}else if(tabName == "mode"){
				tabImg[1].src="images/try/tab_mode_true.png";
			}else if(tabName == "music"){
				tabImg[2].src="images/try/tab_music_true.png";
			}else if(tabName == "timer"){
				tabImg[3].src="images/try/tab_timer_true.png";
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
		normalColor: function (e){
			this._data.currentColor = e;
			console.log("set color to "+ e);
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
		setTimer:function(e,isSet){
			this._data.isSetTimer = e;
			console.log(isSet);
			if(isSet){
				console.log(this._data.timer);
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
		
		timerModeChange:function(e){
			console.log("set timer mode to "+e);
			for (var mode in this._data.timerMode) {
				this._data.timerMode[mode] = false;
			}
			if(e == "Single"){
				this._data.timerMode.single = true;
			}else if(e == "Daily"){
				this._data.timerMode.daily = true;
			}else if(e == "Mon"){
				this._data.timerMode.mon = true;
			}else if(e == "Tue"){
				this._data.timerMode.tue = true;
			}else if(e == "Wed"){
				this._data.timerMode.wed = true;
			}else if(e == "Thu"){
				this._data.timerMode.thu = true;
			}else if(e == "Fri"){
				this._data.timerMode.fri = true;
			}else if(e == "Sat"){
				this._data.timerMode.sat = true;
			}else if(e == "Sun"){
				this._data.timerMode.sun = true;
			}
			this._data.timer.day = e;
		},
		
		//set timer day
		timerPickerModeChange(picker,value){
			console.log("timer set day to " + value);
			this._data.timer.mode = value;
		},
	}
})

