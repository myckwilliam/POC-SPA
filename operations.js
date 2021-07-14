const alterarValor = (id, value) => {
  document.getElementById(id).innerHTML = value;
}

const atribuicao = array => id => f => (...params) =>{
  for(let i = 0; i < array.length; i++) {
    array[i].addEventListener('input', (e) => {
      e.preventDefault();
      const values = params.map(element => parseFloat(element.value));
      alterarValor(id, f(values).toFixed(2));
    })
  }
} 

/////////PERCENTUAL//////////

//Percentual
const percentualInput1 = document.querySelector('#percentual1');
const percentualInput2 = document.querySelector('#percentual2');

const arrayPercentual = [percentualInput1, percentualInput2];

const percentual = array =>
{
  return (array[0] * array[1]/100); 
  
}

atribuicao(arrayPercentual)('resultado-percentual')(percentual)(percentualInput1, percentualInput2);


//Função para aumento percentual

const aumentoPercentualValor = document.querySelector('#aumentoPercentualValor');
const aumentoPercentualAumento = document.querySelector('#aumentoPercentualAumento');

const arrayAumentoPercentual = [aumentoPercentualValor, aumentoPercentualAumento];

const variacao = operation => y => x => {
  switch(operation) {
    case '+':
      return x*(1+y/100);
    case '-':
      return x*(1-y/100);
  }
}

function aumentoPercentual(array)
{
  return variacao('+')(array[1])(array[0]);
}

atribuicao(arrayAumentoPercentual)('resultado-aumento-percentual')(aumentoPercentual)(aumentoPercentualValor, aumentoPercentualAumento);

//Função de desconto percentual

const descontoPercentualValor = document.querySelector('#descontoPercentualValor');
const descontoPercentualDesconto = document.querySelector('#descontoPercentualDesconto');

const arrayDescontoPercentual = [descontoPercentualValor, descontoPercentualDesconto];

function descontoPercentual(array)
{
   return variacao('-')(array[0])(array[1])
}
atribuicao(arrayDescontoPercentual)('resultado-desconto-percentual')(descontoPercentual)(descontoPercentualValor, descontoPercentualDesconto);

//Função de margem de vendas

const margemVendasCusto = document.querySelector('#margemVendasCusto');
const margemVendasMargem = document.querySelector('#margemVendasMargem');

const arrayMargemVendas = [margemVendasCusto, margemVendasMargem];

function margemDeVendas(array)
{
  return array[0]/(1-array[1]/100)
}

atribuicao(arrayMargemVendas)('resultado-margem-vendas')(margemDeVendas)(margemVendasCusto, margemVendasMargem);

//Função de Variação Percentual

const variacaoPercentualInicio = document.querySelector('#variacaoPercentualInicio');
const variacaoPercentualFinal = document.querySelector('#variacaoPercentualFinal');

const arrayVariacaoPercentual = [variacaoPercentualInicio, variacaoPercentualFinal];

function variacaoPercentual(array)
{
  return ((array[1]/array[0])-1)*100
}

atribuicao(arrayVariacaoPercentual)('resultado-variacao-percentual')(variacaoPercentual)(variacaoPercentualInicio, variacaoPercentualFinal);

//Função de Relação Percentual

const relacaoPercentualFinal = document.querySelector('#relacaoPercentualFinal');
const relacaoPercentualOriginal = document.querySelector('#relacaoPercentualOriginal');

const arrayRelacaoPercentual = [relacaoPercentualFinal, relacaoPercentualOriginal];

function relacaoPercentual(array)
{
  return (array[0]/array[1])*100
}

atribuicao(arrayRelacaoPercentual)('resultado-relacao-percentual')(relacaoPercentual)(relacaoPercentualFinal, relacaoPercentualOriginal);


///////////////Juros Simples///////////

//Função de Valor Futuro
const valorFuturoSimplesInput1 = document.querySelector('#valorFuturoSimplesInput1');
const valorFuturoSimplesInput2 = document.querySelector('#valorFuturoSimplesInput2');
const valorFuturoSimplesInput3 = document.querySelector('#valorFuturoSimplesInput3');

const arrayValorFuturoSimples = [valorFuturoSimplesInput1, valorFuturoSimplesInput2, valorFuturoSimplesInput3];

const valorSimples = operation => p => i => n => {
  switch(operation) {
    case '*':
      return p*(1+(i/100)*n);
    case '/':
      return p/(1+(i/100)*n)
  }
}

function valorFuturoSimples(array)
{
  return valorSimples('*')(array[0])(array[1])(array[2]);
}

atribuicao(arrayValorFuturoSimples)('resultado-valor-futuro-simples')(valorFuturoSimples)(valorFuturoSimplesInput1, valorFuturoSimplesInput2, valorFuturoSimplesInput3);

// Função de Valor Presente

const valorPresenteSimplesInput1 = document.querySelector('#valorPresenteSimplesInput1');
const valorPresenteSimplesInput2 = document.querySelector('#valorPresenteSimplesInput2');
const valorPresenteSimplesInput3 = document.querySelector('#valorPresenteSimplesInput3');

const arrayValorPresenteSimples = [valorPresenteSimplesInput1, valorPresenteSimplesInput2, valorPresenteSimplesInput3];

function valorPresenteSimples(array)
{
  return valorSimples('/')(array[0])(array[1])(array[2]);
}

atribuicao(arrayValorPresenteSimples)('resultado-valor-presente-simples')(valorPresenteSimples)(valorPresenteSimplesInput1, valorPresenteSimplesInput2, valorPresenteSimplesInput3);


// Função de Taxa de Juros Simples 

const taxaJurosSimplesInput1 = document.querySelector('#taxaJurosSimplesInput1');
const taxaJurosSimplesInput2 = document.querySelector('#taxaJurosSimplesInput2');
const taxaJurosSimplesInput3 = document.querySelector('#taxaJurosSimplesInput3');

const arrayTaxaJurosSimples = [taxaJurosSimplesInput1, taxaJurosSimplesInput2, taxaJurosSimplesInput3];

function taxaJurosSimples(array)
{
  return ((array[1]-array[0])/(array[0]*array[2])*100)
}

atribuicao(arrayTaxaJurosSimples)('resultado-taxa-juros-simples')(taxaJurosSimples)(taxaJurosSimplesInput1, taxaJurosSimplesInput2, taxaJurosSimplesInput3);

// Função de Número de Períodos Juros Simples

const numeroPeriodosSimplesInput1 = document.querySelector('#numeroPeriodosSimplesInput1');
const numeroPeriodosSimplesInput2 = document.querySelector('#numeroPeriodosSimplesInput2');
const numeroPeriodosSimplesInput3 = document.querySelector('#numeroPeriodosSimplesInput3');

const arrayNumeroPeriodosSimples = [numeroPeriodosSimplesInput1, numeroPeriodosSimplesInput2, numeroPeriodosSimplesInput3];

function numeroPeriodosSimples(array)
{
  return ((array[1]-array[0])/(array[0]*(array[2]/100)))
}

atribuicao(arrayNumeroPeriodosSimples)('resultado-numero-periodos-simples')(numeroPeriodosSimples)(numeroPeriodosSimplesInput1, numeroPeriodosSimplesInput2, numeroPeriodosSimplesInput3);

// Função de conversão de taxas

const conversaoTaxaInput1 = document.querySelector('#conversaoTaxaInput1');
const conversaoTaxaInput2 = document.querySelector('#conversaoTaxaInput2');
const conversaoTaxaInput3 = document.querySelector('#conversaoTaxaInput3');

const arrayConversaoTaxa = [conversaoTaxaInput1, conversaoTaxaInput2, conversaoTaxaInput3];


const conversaoTaxa = array => {
  return (Math.pow((1 + array[0]*0.01),(array[2]/array[1])) - 1) * 100;
}

atribuicao(arrayConversaoTaxa)('resultado-conversao-taxa')(conversaoTaxa)(conversaoTaxaInput1, conversaoTaxaInput2, conversaoTaxaInput3);


////////Juros Compostos////////

const variacaoCompostos = operation => p => i => n => {
  switch(operation) {
    case '*':
      return p*((1+i/100)**n);
    case '/':
      return p/((1+i/100)**n);
  }
}

// Função de valor futuro juros compostos
const valorFuturoCompostosInput1 = document.querySelector('#valorFuturoCompostosInput1');
const valorFuturoCompostosInput2 = document.querySelector('#valorFuturoCompostosInput2');
const valorFuturoCompostosInput3 = document.querySelector('#valorFuturoCompostosInput3');

const arrayValorFuturoCompostos = [valorFuturoCompostosInput1, valorFuturoCompostosInput2, valorFuturoCompostosInput3];

function valorFuturoCompostos(array)
{
    return variacaoCompostos('*')(array[0])(array[1])(array[2])
}

atribuicao(arrayValorFuturoCompostos)('resultado-valor-futuro-compostos')(valorFuturoCompostos)(valorFuturoCompostosInput1, valorFuturoCompostosInput2, valorFuturoCompostosInput3);

//Função de valor presente juros compostos
const valorPresenteCompostosInput1 = document.querySelector('#valorPresenteCompostosInput1');
const valorPresenteCompostosInput2 = document.querySelector('#valorPresenteCompostosInput2');
const valorPresenteCompostosInput3 = document.querySelector('#valorPresenteCompostosInput3');

const arrayValorPresenteCompostos = [valorPresenteCompostosInput1, valorPresenteCompostosInput2, valorPresenteCompostosInput3];

function valorPresenteCompostos(array)
{
  return variacaoCompostos('/')(array[0])(array[1])(array[2]);
}

atribuicao(arrayValorPresenteCompostos)('resultado-valor-presente-compostos')(valorPresenteCompostos)(valorPresenteCompostosInput1, valorPresenteCompostosInput2, valorPresenteCompostosInput3);


//Função de taxa de juros compostos

const taxaJurosCompostosInput1 = document.querySelector('#taxaJurosCompostosInput1');
const taxaJurosCompostosInput2 = document.querySelector('#taxaJurosCompostosInput2');
const taxaJurosCompostosInput3 = document.querySelector('#taxaJurosCompostosInput3');

const arrayTaxaJurosCompostos = [taxaJurosCompostosInput1, taxaJurosCompostosInput2, taxaJurosCompostosInput3];

function taxaJurosCompostos(array)
{
  const a = (array[1]/array[0])**(1/array[2])

  return (a - 1)*100
}

atribuicao(arrayTaxaJurosCompostos)('resultado-taxa-juros-compostos')(taxaJurosCompostos)(taxaJurosCompostosInput1, taxaJurosCompostosInput2, taxaJurosCompostosInput3);


// Função de número de períodos juros compostos

const numeroPeriodosCompostosInput1 = document.querySelector('#numeroPeriodosCompostosInput1');
const numeroPeriodosCompostosInput2 = document.querySelector('#numeroPeriodosCompostosInput2');
const numeroPeriodosCompostosInput3 = document.querySelector('#numeroPeriodosCompostosInput3');

const arrayNumeroPeriodosCompostos = [numeroPeriodosCompostosInput1, numeroPeriodosCompostosInput2, numeroPeriodosCompostosInput3];

function numeroPeriodosCompostos(array){
  
  return Math.log(array[1]/array[0])/Math.log(1 + array[2])
  
}

atribuicao(arrayNumeroPeriodosCompostos)('resultado-numero-periodos-compostos')(numeroPeriodosCompostos)(numeroPeriodosCompostosInput1, numeroPeriodosCompostosInput2, numeroPeriodosCompostosInput3);

  


///Dinheiro no tempo


//const valor_Futuro = (p) => (i) =>(n) => (m) => (p*(1+(i/100))**n ) + m*([((1+(i/100))**n) - 1]/(i/100))
function valor_Futuro(p) {
    return function(i) {
        return function(n) {
            return function(m) {
              const resultado = (p*(1+(i/100))**n ) + m*([((1+(i/100))**n) - 1]/(i/100))
              if(resultado < 0){
                return resultado * (-1)
              }else{
                return resultado 
              }
            }
        }
    }
}

function valor_Presente(f) {
    return function(i) {
        return function(n) {
            return function(m) {
                const resultado = (f/(1+(i/100))**n) + m*[((1+(i/100))**n)-1]/[(1+(i/100))**(n+1) - (1+i/100)**n]
                if(resultado < 0){
                  return resultado*(-1)
                }else{
                  return resultado
                }
                  
            }
        }
    }
}

////Financiamento de empréstimo


function valor_Periodico(p){
  return function(f){
    return function(i){
      return function(n){
        const t = i/100
        return f-(p*(1+t)*[(((1+t)**n)-1)/t])
      }
  }
 }
}
//(p*(1+(i/100))**n ) + m*([((1+(i/100))**n) - 1]/(i/100))

/*function valor_Futuro(p,i,n,m){
   const  t = i/100 //taxa ja em porcentagem
   const a = (1+t)**n //potenciação
   const b = m*([a-1]/t) //segunda parte da fórmula

  const resultado = p*a+b //1,5 360 -400 -20.000
  
  if(resultado < 100)
  {
    return resultado * (-1);
  }else{
    return resultado;
  }

}*/

////ROI
