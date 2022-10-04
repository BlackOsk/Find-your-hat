const prompt = require('prompt-sync')({sigint: true});
const path = require('node:path');
const process = require('node:process');
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

 class Field {
    constructor(arr){   
        this._feild = [
            arr[0],
            arr[1],
            arr[2],
            arr[3],
            arr[4],
        ];
        this._test = [1,1,1,1,1,1];

    }

    get feild(){
        return this._feild;
    }

    set feild(coor){
        this._feild[coor[0]][coor[1]] = pathCharacter;
    } 

    set test(num){
        this._test[num] = num;
    }

    get test(){
        return this._test;
    }
    print(){
      
        return this.feild[0].join('') + '\n' +this.feild[1].join('') + '\n' +this.feild[2].join('') + '\n' +this.feild[3].join('') + '\n' +this.feild[4].join('') + '\n';
    } 
} 

const myField = new Field([
    [pathCharacter, fieldCharacter,fieldCharacter,fieldCharacter,hole],
    [hole, fieldCharacter,hole,fieldCharacter,fieldCharacter],
    [fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter,hole],
    [fieldCharacter,hole,hole,hole,fieldCharacter],
    [fieldCharacter,fieldCharacter,hat,hole,fieldCharacter],
])

/* console.log(myField.print());
console.log(myField.test);
myField.test = 3;
console.log(myField.test);
 */
console.log(myField.feild);
myField.feild=[1,3];
console.log(myField.print());