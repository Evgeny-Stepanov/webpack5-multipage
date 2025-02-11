(() => {
	"use strict";
	const e = document.createElement("p");
	(e.textContent = "Hello from webpack!"), document.body.appendChild(e);
	const t = document.createElement("p"),
		n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	(t.textContent = n.join(" ")), document.body.appendChild(t);
})();
