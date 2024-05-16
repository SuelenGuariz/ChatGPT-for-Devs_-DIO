
let musicas = [
    {titulo:'Algoritmos Criativos ou Máquinas Imitadoras? Reflexões sobre a Arte Gerada por IA', artista: 'ART AI - CHANNEL', src: 'musica/202405161518 (online-audio-converter.com).mp3', img:'img/POD CAST ART AI CHANEL.png'}, 
   
];





let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

musica.addEventListener('loadeddata', () => {
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
});



// eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
 if (indexMusica <0) {
    indexMusica = musicas.length -1;
 }
 renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
 if (indexMusica >= musicas.length) {
    indexMusica = 0;
 }
 renderizarMusica(indexMusica);

});


// funções
function renderizarMusica(index){
 musica.setAttribute('src',musicas[index].src);
 musica.addEventListener('loadeddata',() => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
 });
}


function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block'; 
    document.querySelector('.botao-play').style.display = 'none'; 
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none'; 
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    let porcentagem = (musica.currentTime / musica.duration) * 100; 
    barra.style.width = porcentagem + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime)); 
}

