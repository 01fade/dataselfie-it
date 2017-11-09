function init () {
	console.log(window.location.hash);
	if (window.location.hash === ""){
		$(".content").fadeOut();
		$("#container").fadeIn();
	} else if (window.location.hash === "#about"){
		$(".content").fadeOut();
		$("#about-p").fadeIn();
	} else if (window.location.hash === "#download"){
		$(".content").fadeOut();
		$("#download-p").fadeIn();
	} else if (window.location.hash === "#context"){
		$(".content").fadeOut();
		$("#context-p").fadeIn();
	} else {
		$(".content").fadeOut();
		$("#logo").fadeOut();
		$("#container").fadeIn();
	}

	if (window.location.hash !== "") {
		$("#logo").fadeIn();
	}
}

window.addEventListener("hashchange", init);
window.onload = function(){
	init();
};