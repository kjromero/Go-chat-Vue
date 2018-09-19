 const socket = io();

 new Vue({
 	el:'#chat-app',
 	created(){
 		socket.on("chat message", (msg) => {
 			this.messages.push({
 				text: msg,
 				date: new Date().toLocalString()
 			})
 		})
 	},
 	data:{
 		message: '',
 		messages: []
 	},
 	methods:{
 		sendMessage(){
 			socket.emit('chat message', this.message);
 			this.message = '';
 		}
 	}
 })