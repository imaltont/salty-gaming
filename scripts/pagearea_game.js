document.addEventListener("DOMContentLoaded", function(event){
	var elements = {
		page: document.getElementById("players"),
		player1: document.getElementById("player1"),
		player2: document.getElementById("player2"),
		player3: document.getElementById("player3"),
		player4: document.getElementById("player4"),
		sc2_b: document.getElementById("sc2_b"),
		hs_b: document.getElementById("hs_b"),
	}

	elements.page.innerHTML = "";
	elements.page.appendChild(elements.player1);
	elements.page.appendChild(elements.player2);
	
	elements.sc2_b.addEventListener("click", function(event){
		elements.page.innerHTML = "";
		elements.page.appendChild(elements.player1);
		elements.page.appendChild(elements.player2);
	});
	elements.hs_b.addEventListener("click", function(event){
		elements.page.innerHTML = "";
		elements.page.appendChild(elements.player3);
		elements.page.appendChild(elements.player4);
	});

})