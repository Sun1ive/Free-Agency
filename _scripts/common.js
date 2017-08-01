

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