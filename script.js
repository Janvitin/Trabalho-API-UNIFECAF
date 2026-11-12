const container = document.getElementById('character-container');
const API_URL = 'https://rickandmortyapi.com/api/character';

async function carregarPersonagens() {
  try {
    const resposta = await fetch(API_URL);
    const dados = await resposta.json();
    
    renderizarCards(dados.results);
  } catch (erro) {
    console.error('Erro ao buscar dados da API:', erro);
    container.innerHTML = '<p>Erro ao carregar dados dos personagens.</p>';
  }
}

function renderizarCards(personagens) {
  container.innerHTML = '';

  personagens.forEach(personagem => {

    const card = document.createElement('div');
    card.classList.add('card');


    const img = document.createElement('img');
    img.src = personagem.image;
    img.alt = personagem.name;


    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');


    const nome = document.createElement('h3');
    nome.textContent = personagem.name;


    const especie = document.createElement('p');
    especie.innerHTML = `<strong>Espécie:</strong> ${personagem.species}`;


    const status = document.createElement('p');
    const classeStatus = personagem.status.toLowerCase() === 'alive' ? 'status-alive' : 'status-dead';
    status.innerHTML = `<strong>Status:</strong> <span class="${classeStatus}">${personagem.status}</span>`;


    cardContent.appendChild(nome);
    cardContent.appendChild(especie);
    cardContent.appendChild(status);

    card.appendChild(img);
    card.appendChild(cardContent);


    container.appendChild(card);
  });
}

carregarPersonagens();