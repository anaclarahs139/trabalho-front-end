// ADICIONAR EVENTOS AO REEMBOLSO

async function pegarEventos() {
    try {
        const response = await fetch('scripts/app.json');
        const dados = await response.json();

        const select = document.querySelector('#ingressos');

        dados.eventos.forEach(evento => {
            const novaLinha = document.createElement('option');

            novaLinha.textContent = `${evento.pedido} - ${evento.nome}   ${evento.data}`;
            select.appendChild(novaLinha);

        });
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
    }
}

pegarEventos();



function pegarReembolso() {
    var evento = document.getElementById("ingressos");
    var valorIngresso = evento.options[evento.selectedIndex].text;

    var motivo = document.getElementById("porque-reembolso");
    var valorMotivo = motivo.options[motivo.selectedIndex].text;

    var obs = document.getElementById('detalhes-adicionais').value;

    var conteudo = document.querySelector('.conteudo-reembolsos-em-analise');


    let cod = `
                            <div class="conteudo-reembolso-em-analise">
                            <div class="titulo-reembolso-pendente">
                                <h3 class="nome-evento-do-reembolso">Festival da Musica</h3>
                                <p class="reembolso-pendente">Em analise</p>
                            </div><!--titulo-status-reembolso-->

                            <div class="preco-botao-reembolso">
                                <p class="preco-reembolso">R$ 120</p>
                                <button class="cancelar-reembolso">cancelar Reembolso</button>
                            </div><!--preco-botao-reembolso-->

                            <div class="motivo-reembolso">
                                <p class="motivo"><b>Motivo:</b> Emergência de trabalho</p>
                                <p class="observacao"><b>Observação:</b> Nenhuma observação</p>
                            </div><!--motivo-reembolso-->
                        </div><!--conteudo-rembolso-em-analise-->`;

    conteudo.innerHTML += cod;
    conteudo.appendChild(cod);


}
