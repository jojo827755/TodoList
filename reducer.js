import storage from './uti/storage.js'

const init = {
    todos: storage.get(),
    fiter : 'a' , 
    fiters : {
        a : function () { return true },
        active : function(todo) {return !todo.completed},
        completed : function(todo){return todo.completed}
    },
    editIndex : null
}
const actions = {
    add({ todos }, title) {
        if (title) {
            todos.push({ title, completed: false })
            storage.set(todos)
        }
    },
    togge({ todos }, index) {
        const todo = todos[index];
        todo.completed = !todo.completed
        storage.set(todos)
    },
    toggeA({ todos  },completed) {
        todos.forEach(function (todo) {
            console.log(todo.completed)
             todo.completed = completed

        })
        storage.set(todos)
    },
    destroy({todos},index){
        todos.splice(index,1);
        storage.set(todos)
    }
    ,
    switchFi(state , fiter){
        state.fiter = fiter
    },
    resetCom(state){
        state.todos = state.todos.filter(state.fiters.active);  
        storage.set(state.todos)
    },
    startEdit(state , index){
        state.editIndex = index
    },
    endEdit(state,tite){
        if(state.editIndex != null){

            if(tite){

                state.todos[state.editIndex].title =tite;   
                state.editIndex = null
                storage.set(state.todos)
            }
            else{
                this.destroy(state , state.editIndex)
            }
            
        }
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}