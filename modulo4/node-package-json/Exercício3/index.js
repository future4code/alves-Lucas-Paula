function adicionaTarega(item) {
    let tarefas = ['Jantar romantico', 'fazer Oba Oba']
    let novaTarefa = item
    tarefas = [...tarefas, novaTarefa]

    console.log('Tarefa adicionada com sucesso!')
    console.log(tarefas)
}

adicionaTarega(process.argv[2])