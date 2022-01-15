// Mostra data atual das notas
new Date().toDateString()

// Função para criar nova tarefa
function criaTarefa() {
  //let id = 1;
  let tarefa = document.getElementById('tarefa');
  let descricao = document.getElementById('descricao');
  let prioridade = document.getElementById('prioridade');
  let date = "";

  if (tarefa.value == "" || descricao.value == "" || prioridade.value == "") {
    alert('Favor preencher todos os campos!');
    //tarefa.focus();
    return false;
  } else {
    //localStorage.setItem('id', id.value);
    localStorage.setItem('tarefa', tarefa.value);
    localStorage.setItem('descricao', descricao.value);
    localStorage.setItem('prioridade', prioridade.value);
    localStorage.setItem('date', new Date().toLocaleString());

    alert('Tarefa adicionada com sucesso');

    tarefa.value = descricao.value = prioridade.value = '';

    let tabela = document.getElementById("tbl");
    let linha = tabela.insertRow(1);
    //let celula1 = linha.insertCell(0); //ID
    let celula1 = linha.insertCell(0); //Nome da Tarefa
    let celula2 = linha.insertCell(1); // Descrição
    let celula3 = linha.insertCell(2); // Prioridade
    let celula4 = linha.insertCell(3); // Data
    let celula5 = linha.insertCell(4); // Botão de ação

    //celula1.innerHTML = localStorage.getItem('id', JSON.stringfy(id));
    celula1.innerHTML = localStorage.getItem('tarefa', JSON.stringify(tarefa));
    celula2.innerHTML = localStorage.getItem('descricao', JSON.stringify(descricao));
    celula3.innerHTML = localStorage.getItem('prioridade', JSON.stringify(prioridade));
    celula4.innerHTML = localStorage.getItem('date', JSON.stringify(date));
    celula5.innerHTML = "<a id='mb-3' style='color:red' type='link' onclick='removeTarefa(this)'>Remover</a>";
  }
}

// Remover tarefa concluída
function removeTarefa(linha) {
  let i = linha.parentNode.parentNode.rowIndex;
  document.getElementById('tbl').deleteRow(i);
}
