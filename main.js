const id1 = document.getElementById('op1');
const id2 = document.getElementById('op2');
const id3 = document.getElementById('op3');
const id4 = document.getElementById('op4');
const id5 = document.getElementById('op5');
const id6 = document.getElementById('op6');
const id7 = document.getElementById('op7');
const id8 = document.getElementById('op8');
const id9 = document.getElementById('op9');
const id10 = document.getElementById('op10');
const id11 = document.getElementById('op11');
const id12 = document.getElementById('op12');

const display = string => {
    document.getElementById(string).style.display = "block";
}

const myOpArray = ['op1','op2','op3','op4','op5','op6','op7','op8','op9','op10','op11','op12'];
const myDopArray = ['dop1','dop2','dop3','dop4','dop5','dop6','dop7','dop8','dop9','dop10','dop11','dop12'];


const str = (array, element) => {
    return array.splice(array.indexOf(element), 1);
}

const displayNone = array => {
    for (let i = 0; i < array.length; i++) {
        document.getElementById(array[i]).style.display = 'none';
    }
}

const setUnactive = array => {
    for (let i = 0; i < array.length; i++) {
        document.getElementById(array[i]).classList.remove('active');
    }
    console.log(array)
}

const copyArray = array => {
   return array.map(element => element)
}

const setActive = string => {
    document.getElementById(string).classList.add('active')
}


id1.onclick = function(){
    setActive('op1')
    const c = copyArray(myOpArray)
    str(c, 'op1')
    setUnactive(c)
    display('dop1')
    const d = copyArray(myDopArray)
    str(d, 'dop1')
    displayNone(d)
}

id2.onclick = function(){
    setActive('op2')
    const c = copyArray(myOpArray)
    str(c, 'op2')
    setUnactive(c)
    display('dop2')
    const d = copyArray(myDopArray)
    str(d, 'dop2')
    displayNone(d)
}

id3.onclick = function(){
    setActive('op3')
    const c = copyArray(myOpArray)
    str(c, 'op3')
    setUnactive(c)
    display('dop3')
    const d = copyArray(myDopArray)
    str(d, 'dop3')
    displayNone(d)
}

id4.onclick = function(){
    setActive('op4')
    const c = copyArray(myOpArray)
    str(c, 'op4')
    setUnactive(c)
    display('dop4')
    const d = copyArray(myDopArray)
    str(d, 'dop4')
    displayNone(d)
}

id5.onclick = function(){
    setActive('op5')
    const c = copyArray(myOpArray)
    str(c, 'op5')
    setUnactive(c)
    display('dop5')
    const d = copyArray(myDopArray)
    str(d, 'dop5')
    displayNone(d)
}

id6.onclick = function(){
    setActive('op6')
    const c = copyArray(myOpArray)
    str(c, 'op6')
    setUnactive(c)
    display('dop6')
    const d = copyArray(myDopArray)
    str(d, 'dop6')
    displayNone(d)
}

id7.onclick = function(){
    setActive('op7')
    const c = copyArray(myOpArray)
    str(c, 'op7')
    setUnactive(c)
    display('dop7')
    const d = copyArray(myDopArray)
    str(d, 'dop7')
    displayNone(d)
}

id8.onclick = function(){
    setActive('op8')
    const c = copyArray(myOpArray)
    str(c, 'op8')
    setUnactive(c)
    display('dop8')
    const d = copyArray(myDopArray)
    str(d, 'dop8')
    displayNone(d)
}

id9.onclick = function(){
    setActive('op9')
    const c = copyArray(myOpArray)
    str(c, 'op9')
    setUnactive(c)
    display('dop9')
    const d = copyArray(myDopArray)
    str(d, 'dop9')
    displayNone(d)
}

id10.onclick = function(){
    setActive('op10')
    const c = copyArray(myOpArray)
    str(c, 'op10')
    setUnactive(c)
    display('dop10')
    const d = copyArray(myDopArray)
    str(d, 'dop10')
    displayNone(d)
}

id11.onclick = function(){
    setActive('op11')
    const c = copyArray(myOpArray)
    str(c, 'op11')
    setUnactive(c)
    display('dop11')
    const d = copyArray(myDopArray)
    str(d, 'dop11')
    displayNone(d)
}

id12.onclick = function(){
    setActive('op12')
    const c = copyArray(myOpArray)
    str(c, 'op12')
    setUnactive(c)
    display('dop12')
    const d = copyArray(myDopArray)
    str(d, 'dop12')
    displayNone(d)
}


