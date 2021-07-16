import html from '../core.js'
import {connect} from '../store.js'
import TodoItem from './TodoItem.js'

const connector = connect()
function TodoList({todos,fiter,fiters} ){
    return html`
<section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" 
    onchange="dispatch('toggeA',this.checked)"
    ${todos.every(fiters.completed) && 'checked'}
    >  
    <label for="toggle-all" ">Mark all as complete</label>
    <ul class="todo-list">
        ${todos.filter(fiters[fiter]).map((todo,index) => TodoItem({todo , index}))}
    </ul>
</section>
    `
}

export default connector(TodoList);