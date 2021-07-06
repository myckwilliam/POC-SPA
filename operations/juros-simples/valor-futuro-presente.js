const valor = op => i => m => n => {
    switch(op) {
        case('mult'): return (m * (1 + i*0.01*n));
        case('div'): return (m / (1 + i*0.01*n));
    }
}

const valorPresente = valor('div');
const valorFuturo = valor('mult');
const valorFuturo10 = valorFuturo(10)

console.log(valorFuturo10(1000)(3))