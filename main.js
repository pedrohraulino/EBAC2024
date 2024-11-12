document.addEventListener('DOMContentLoaded', function () {
    const nome = document.getElementById('nome');
    const user = document.getElementById('user');
    const img = document.getElementById('img');
    const repositorios = document.getElementById('repositorios');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');

    const url = 'https://api.github.com/users/pedrohraulino';

    fetch(url)
        .then(function (response) {
            if (!response.ok) throw new Error('Erro na requisição');
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            nome.textContent = data.name;
            user.textContent = data.login;
            img.src = data.avatar_url;
            repositorios.textContent = data.public_repos;
            seguidores.textContent = data.followers;
            seguindo.textContent = data.following;
        })
        .catch(function (error) {
            console.error('Erro:', error);
        });
});
