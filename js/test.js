	
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
		isPlay:true,
		btn_switch:true,
		rangeBright:100,
		rangeSpeed:50,
		currentColor:"#FFFFFF",
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
			}else if(e == "breath"){
				changeMode[1].className="change-mode change-mode-true";
			}else if(e == "falsh"){
				changeMode[2].className="change-mode change-mode-right change-mode-true";
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
			this._data.isPlay = !this._data.isPlay;
		},
	      		
		//灯带开关切换
		btnSwitch:function(e){
			this._data.btn_switch = !this._data.btn_switch;
		},
		
		//点击color页面normal颜色
		normalColor: function (e){
			this._data.currentColor = e;
		},
		
		//mode页面picker change
		modeChange:function(picker, values){
			console.log(picker);
			console.log(values);
		}
	}
})

