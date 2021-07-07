const conversao = i => from => to => {
    return ((1 + i*0.01)**(Math.floor(to/from)) - 1) * 100;
}

const dia = 1;
const semana = 7;
const mes = 30;
const bimestre = 2*mes;
const trimestre = 3*mes;
const semestre = 6*mes;
const ano = 360;


console.log(conversao(1)(dia)(ano))
