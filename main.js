const root = new Vue({
	el:"#root",
	data:{
		mail:[],
		url:'https://flynn.boolean.careers/exercises/api/random/mail'
	},
	created(){
		this.mailList()
	},
	methods:{

		mailList(){
			const id = setInterval(()=>{

				axios.get(this.url)
				.then(response => {
					// handle success
					this.mail.push(response.data.response)
					console.log(this);
				})
				.catch( error => {
					// handle error
					console.log(error);
				})
				console.log(this.mail.length);
				if(this.mail.length === 9){
					clearInterval(id)
				}
			},1000)
			
		}
	}
})