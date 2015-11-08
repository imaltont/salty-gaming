document.addEventListener("DOMContentLoaded", function(event){
	var elements = {
		header: document.getElementById("page_header"),
		footer: document.getElementById("page_footer"),
		player_header: document.getElementById("player_page_header"),
		player_footer: document.getElementById("player_page_footer")
	}
	//Header for all main pages, except index.html
	if (elements.header){
		var h_div = document.createElement("div");
		h_div.className = "flex container space-between";
		h_div.innerHTML = "<img id=\"logo\" src=\"../images/logo.png\"/><div class=\"top\"><div class=\"social\"><a href=\"\">FB</a><a href=\"\">TW</a><a href=\"\">YT</a></div><nav><a href=\"index.html\">NEWS</a><a href=\"about.html\">ABOUT</a><a href=\"teams.html\">TEAM</a><a href=\"sponsors.html\">SPONSORS</a><a href=\"shop.html\">SHOP</a><a href=\"contact.html\">CONTACT</a></nav></div>";
		elements.header.appendChild(h_div);	
	}

	//Footer for all main pages
	if (elements.footer){
		var f_div = document.createElement("div");
		f_div.className = "flex container";
		f_div.innerHTML = "<div class=\"col-3\" style=\"text-align: left;\">Copyright 2015|All Rights Reserved</div><div class=\"col-3\" style=\"text-align: center;\"><img src=\"../images/small_logo.png\"></div><div class=\"social col-3\"><a href=\"\">FB</a><a href=\"\">TW</a><a href=\"\">YT</a></div>";
		elements.footer.appendChild(f_div);
		}
	//Header for player pages
	if (elements.player_header !== null){
		var p_h_div = document.createElement("div");
		p_h_div.className = "flex container space-between";
		p_h_div.innerHTML = "<img id=\"logo\" src=\"../../images/logo.png\"/><div class=\"top\"><div class=\"social\"><a href=\"\">FB</a><a href=\"\">TW</a><a href=\"\">YT</a></div><nav><a href=\"../index.html\">NEWS</a><a href=\"../about.html\">ABOUT</a><a href=\"../teams.html\">TEAM</a><a href=\"../sponsors.html\">SPONSORS</a><a href=\"../shop.html\">SHOP</a><a href=\"../contact.html\">CONTACT</a></nav></div>";
		elements.player_header.appendChild(p_h_div);
	}

	//Footer for all player pages
	if (elements.player_footer){
		var p_f_div = document.createElement("div");
		p_f_div.className = "flex container";
		p_f_div.innerHTML = "<div class=\"col-3\" style=\"text-align: left;\">Copyright 2015|All Rights Reserved</div><div class=\"col-3\" style=\"text-align: center;\"><img src=\"../../images/small_logo.png\"></div><div class=\"social col-3\"><a href=\"\">FB</a><a href=\"\">TW</a><a href=\"\">YT</a></div>";
		elements.player_footer.appendChild(p_f_div);
	}


})