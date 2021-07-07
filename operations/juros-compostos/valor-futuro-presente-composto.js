const valor = op => i => m => n => {
    switch(op) {
        case('mult'): return m * (1 + i*0.01*n)**n;
        case('div'): return m / (1 + i*0.01*n)**n;
    }
}

const valorPresenteComp = valor('div');
const valorFuturoComp = valor('mult');
const valorFuturoComp10 = valorFuturo(10)