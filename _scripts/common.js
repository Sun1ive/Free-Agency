

new Vue({
	el: "#app",
	data: {
		show: true,
	},
	methods: {
		created(){
			$.ajax({
				type: "POST", 
				url:  "mail.php",
				data: $(this).serialize()
			}).done(function(){
				console.log(this);
				alert("Thanks");
			})
		}
	}
});

new Vue({
	el: "#sub",
	data: {
	},
	methods: {
		subscribe(){
			$.ajax({
				type: "POST", 
				url:  "subscribe.php",
				data: $(this).serialize()
				}).done(function(){
				console.log(this);
				alert("Thanks");
			})
		}
	}
});

new Vue({
	el: ".menu",
	data: {
		show: false,
		lowResMenu: true,
		menuList: [
		{ item: "Home", url: "http://google.com" },
		{ item: "About Us", url: "http://goodgame.ru" },
		{ item: "Our Approach", url: "http://google.com" },
		{ item: "Our Work", url: "http://gmail.com" },
		{ item: "Free Consultation", url: "http://github.com" }
		]
	}
});