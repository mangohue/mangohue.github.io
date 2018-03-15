
function tab(e){
	console.log(e);
	setTab(e.dataset.tab);
		
}

function setTab(tabName){
	var tab = document.getElementsByClassName("f-tab");
	var body_tab = document.getElementsByClassName("body-tab");
	
	console.log(body_tab);
	for (var i= 0;i<tab.length;i++) {
		if(tab[i].dataset.tab == tabName){
			tab[i].lastElementChild.className="tab-txt-true";
			body_tab[i].hidden="";
		}else{
			tab[i].lastElementChild.className="tab-txt-false";
			body_tab[i].hidden="hidden";
		}
		
	}
}
