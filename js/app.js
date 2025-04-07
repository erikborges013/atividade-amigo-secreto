let amigos = [];
//Aqui na linha 1 fica a lista dos nomes dos amigos

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    //Aqui na linha 6 é onde vai ficar os nomes dos amigos

    amigos.push(amigo.value);
    //Aqui na linha 9 adiciona os nomes adicionados no campo ao array

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
        //Se na lista não tiver nome nenhum adiciona apenas o nome sem virgula.
    } else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
        //Se na lista já tiver nome de alguem, adiciona a propria lista anterior na lista de novo com virgula e o nome do amigo adicionado.

    }
    amigo.value = '';
    //Aqui limpa o campo de adicionar toda vez que um novo amigo for adicionado

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    //Aqui chamamos a função sortear sempre que o botão for clicado.
    embaralhar(amigos);
    //Sempre que a função sortear for chamada, vai chamar a função embaralhar junto.

let sorteio = document.getElementById('lista-sorteio');
    //Aqui adicionamos a lista dos sorteados a variável sorteio para poder manipular.
    if(amigos.length < 4) {
        alert('Adicione mais amigos!');
        return;
    }
    for (i = 0; i < amigos.length; i++) 
        //Enquanto i que é igual a 0  for menor que a quantidade de nomes na lista de amigos, é para ficar rodando o código e incrementando mais 1.
        {
        if (i == amigos.length - 1) 
            //Aqui entramos numa condicional dentro do laço for. Se i for igual a quantidade de nomes na lista menos 1 que é igual a 2, executa o bloco abaixo.
            {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[0] + '<br>';
            //Aqui na linha 39 nós executamos o bloco inserindo a informação anterior a informação atual.
            //Amigo[0] é para que no final do loop o ultimo amigo sorteie o primeiro amigo da lista embaralhada.
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[i + 1] + '<br>';
            //Mas se i não for igual a quantidade de amigos-1 vai executar esse bloco da linha 43. O amigos[i+1] é para não ficar sorteando sempre a mesma pessoa.

        }
    }

}



function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) 
        //O valor da variável indice é a quantidade de nomes na lista.
        //Indice sozinho alí é a condição de parada Enquanto indice for true, pois quando o indice chegar a zero o loop é obrigado a parar.
        {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        //Aqui foi atribuido o numero sorteado ao indice aleatorio. A variavel  muda valor dentro do loop mesmo sendo const.
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
        //Aqui é onde os nomes trocam de lugar e embaralham a array.
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    
    atualizarLista()
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function() {
            excluirAmigo(i)
        });

        lista.appendChild(paragrafo);
    }

    }

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    amigos = [];
    //Aqui nós limpamos todos os campos ao clicar no botão reiniciar.

}