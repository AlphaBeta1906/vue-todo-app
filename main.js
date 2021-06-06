const app = {
  data() {
    return {
      message: "",
      completed : false,
      checkbox : "",
      hover: "Insert todo",
      todos:[]
    }
  },
  created(){
  	this.loadStorage();
  },
	methods:{

  	addItem(){
  		if (this.message.length > 0) {
  			this.todos.push({id:this.todos.length+1,text:this.message,completed_status:false}),
  			this.message = "";
  			localStorage.setItem("todos", JSON.stringify(this.todos));

  		}
  	},
  	removeItem(itemId) {
      	this.todos = this.todos.filter((obj) => {
      		return obj.id !== itemId;
      	})
      	localStorage.setItem("todos", JSON.stringify(this.todos));

    },
    completeItem(itemId,status){
    	console.log(this.todos)
    	localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    loadStorage(){
    	const ls = JSON.parse(localStorage.getItem("todos"))
    	if (ls == null) {
    		return
    	}
    	this.todos = ls
    }

  }

}


Vue.createApp(app).mount('#app')
