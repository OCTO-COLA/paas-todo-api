async function renderingTodos(todos){
    if (todos.left === 0)
    {
        return "no todos to render"
    }
    let render = ''
    await todos.forEach((todo, number) => {
        render += renderingOneTodo(todo, number)
        render += '<hr>'
    })
    return render
}
// {description, date_echeance, statut}
function renderingOneTodo(todo, number) {
    let render =
    `<table>
    <tr><th>N°${number}</th></tr>
    <tr><td>Description</td><td>${todo.description}</td></tr>
    <tr><td>Date d'echeance</td><td>${todo.date_echeance}</td></tr>`
    if (todo.statut){
        render += `<tr><td>Statut</td><td>${todo.statut}</td></tr>`
    }
    render += `</table>`
    return render
}

 exports.renderingTodos = renderingTodos