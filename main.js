class Docente {
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getMatricula() {
        return this.matricula;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
    }

    getSalario() {
        return this.salario;
    }

    setSalario(salario) {
        this.salario = salario;
    }

    updateSalario() {
        this.salario *= 1.2; // Atualiza o próprio salário
    }
}

class Professor extends Docente {
    constructor(nome, matricula, salario, materia) {
        super(nome, matricula, salario);
        this.materia = materia;
    }

    getMateria() {
        return this.materia;
    }

    setMateria(materia) {
        this.materia = materia;
    }

    updateSalario() {
        this.salario *= 1.3;
    }
}

class ProfessorSubstituto extends Professor {
    constructor(nome, matricula, salario, materia, professorTitular) {
        super(nome, matricula, salario, materia);
        this.professorTitular = professorTitular;
    }

    getProfessorTitular() {
        return this.professorTitular;
    }

    setProfessorTitular(professorTitular) {
        this.professorTitular = professorTitular;
    }
}

class Tecnico extends Docente {
    constructor(nome, matricula, salario, setor) {
        super(nome, matricula, salario);
        this.setor = setor;
    }

    getSetor() {
        return this.setor;
    }

    setSetor(setor) {
        this.setor = setor;
    }

}


const professor = new Professor("Ana Souza", "P001", 4000, "Matemática");
console.log("Nome do Professor:", professor.getNome()); 
console.log("Matéria do Professor:", professor.getMateria());
console.log("Salário inicial do Professor:", professor.getSalario());
professor.updateSalario();
console.log("Salário atualizado do Professor:", professor.getSalario()); 

const professorSubstituto = new ProfessorSubstituto("João Pedro", "PS001", 2500, professor.materia, professor);
console.log("\nNome do Professor Substituto:", professorSubstituto.getNome());
console.log("Matéria do Professor Substituto:", professorSubstituto.getMateria()); 
console.log("Salário inicial do Professor Substituto:", professorSubstituto.getSalario());
console.log("Nome do Professor Titular:", professorSubstituto.getProfessorTitular().getNome());

const tecnico = new Tecnico("Mariana Costa", "T001", 3500, "Administrativo");
console.log("\nNome do Técnico:", tecnico.getNome());
console.log("Setor do Técnico:", tecnico.getSetor()); 
console.log("Salário inicial do Técnico:", tecnico.getSalario()); 
tecnico.updateSalario();
console.log("Salário atualizado do Técnico:", tecnico.getSalario()); 

