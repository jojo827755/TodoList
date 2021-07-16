import html from '../core.js'
import { connect } from '../store.js'
import header from './header.js'
import TodoList from './TodoList.js'
function App({ todos,fiter, fiters }) {

    return html`
<footer class="footer">
    <span class="todo-count"><strong>${todos.filter(fiters.active).length}</strong> item left</span>
    <ul class="filters">
    ${Object.keys(fiters).map(function (type) {
        return `
    <li>
        <a class="${fiter ===type && 'selected'}" href="#" onclick ="dispatch('switchFi','${type}')  " >${type[0].toUpperCase() + type.slice(1)}</a>
    </li>
                `
    })}
    </ul>
    ${!todos.filter(fiters.completed).length <=0 && `    <button class="clear-completed" onclick = "dispatch('resetCom')"   >Clear completed</button>
    `}
</footer>
    `
}

export default connect()(App);