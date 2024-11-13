const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 9.2 },
    { nome: "Pedro", nota: 7.4 },
    { nome: "Ana", nota: 6.8 },
    { nome: "Lucas", nota: 5.5 },
    { nome: "Carla", nota: 3.0 },
    { nome: "Bruna", nota: 5.8 },
    { nome: "Rafael", nota: 7.0 }
];


const passouPorMedia = (aluno) => aluno.nota >= 7


const alunosAprovados = alunos.filter(passouPorMedia)

console.log(alunosAprovados);