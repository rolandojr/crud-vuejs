const app = new Vue({
  el:'#app',
  data:{
    title:'Gym rolando ramos',
    tasks:[],
    newTask:''
  },
  methods:{
    addTask: function(){
      this.tasks.push({
        name: this.newTask,
        state:false
      });
      this.newTask='';
      localStorage.setItem('tasks',JSON.stringify(this.tasks));
      console.log(this.tasks);
    },
    editTask:function(index){
      console.log(index);
      this.tasks[index].state=true
      localStorage.setItem('tasks',JSON.stringify(this.tasks));
    },
    deleteTask:function(index){
      console.log(index);
      this.tasks.splice(index,1);
      localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
  },
  created: function(){
    let dataDB = JSON.parse(localStorage.getItem('tasks'));
    console.log(dataDB);
    if (dataDB === null) {
      this.tasks = [];
    }else{
      this.tasks = dataDB;
    }
    
    console.log(this.tasks);
  }

})

// var Entity;
// var EntityId;

// ZOHO.embeddedApp.on("PageLoad", function (data) {
//     console.log("Testing: ",data);
//     Entity = data.Entity;
//     EntityId = data.EntityId;
//     ZOHO.CRM.API.getRecord({ Entity: Entity, RecordID: EntityId })
//       .then(function (data) {
//         console.log("DATA",data)
//       })
//   })
//    ZOHO.embeddedApp.init();