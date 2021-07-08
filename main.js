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
const id13 = document.getElementById('op13');
const id14 = document.getElementById('op14');
const id15 = document.getElementById('op15');
const id16 = document.getElementById('op16');
const id17 = document.getElementById('op17');
const id18 = document.getElementById('op18');
const id19 = document.getElementById('op19');
const id20 = document.getElementById('op20');
const id21 = document.getElementById('op21');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');

const display = string => {
    document.getElementById(string).style.display = "block";
}

const displayFlex = string => {
    document.getElementById(string).style.display = "flex";
}

const myOpArray = ['op1','op2','op3','op4','op5','op6','op7','op8','op9','op10','op11','op12','op13','op14','op15','op16','op17','op18','op19','op20','op21'];
const myDopArray = ['dop1','dop2','dop3','dop4','dop5','dop6','dop7','dop8','dop9','dop10','dop11','dop12','dop13','dop14','dop15','dop16','dop17','dop18','dop19','dop20','dop21'];
const myGroupArray = ['p1','p2','p3','p4','p5', 'p6']
const myOpSetArray = ['o1','o2','o3','o4','o5', 'o6']


const str = (array, element) => {
    return array.splice(array.indexOf(element), 1);
}

const displayNone = array => {
    for (let i = 0; i < array.length; i++) {
        document.getElementById(array[i]).style.display = 'none';
    }
}

const setActive = string => {
    document.getElementById(string).classList.add('active')
}

const setUnactive = array => {
    for (let i = 0; i < array.length; i++) {
        document.getElementById(array[i]).classList.remove('active');
    }
}

const setAltActive = string => {
    document.getElementById(string).classList.add('altActive')
}

const setAltUnactive = array => {
    for (let i = 0; i < array.length; i++) {
        document.getElementById(array[i]).classList.remove('altActive');
    }
}

const copyArray = array => {
   return array.map(element => element)
}



const show = (...arguments) => {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].onclick = function(){
            setActive(myOpArray[i])
            const c = copyArray(myOpArray)
            str(c, myOpArray[i])
            setUnactive(c)
            display(myDopArray[i])
            const d = copyArray(myDopArray)
            str(d, myDopArray[i])
            displayNone(d)
        }
    }
}

const showOp = (...arguments) => {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].onclick = function(){
            setAltActive(myGroupArray[i])
            const c = copyArray(myGroupArray)
            str(c, myGroupArray[i])
            setAltUnactive(c)
            displayFlex(myOpSetArray[i])
            const d = copyArray(myOpSetArray)
            str(d, myOpSetArray[i])
            displayNone(d)
        }
    }
}

showOp(p1,p2,p3,p4,p5, p6);
show(id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,id12,id13,id14,id15,id16,id17,id18,id19,id20,id21);
