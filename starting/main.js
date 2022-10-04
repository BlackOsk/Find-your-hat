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
        ]
    }

    get feild(){
        return this._feild;
    }

    set feild(coor){
        this._feild[coor[0]][coor[1]] = pathCharacter;
    } 
    
    print(){
        return this.feild[0].join('') + '\n' +this.feild[1].join('') + '\n' +this.feild[2].join('') + '\n' +this.feild[3].join('') + '\n' +this.feild[4].join('') + '\n';
    } 
} 

const myField = new Field([
    [pathCharacter, fieldCharacter,fieldCharacter,fieldCharacter,hole],
    [hole, fieldCharacter,hole,fieldCharacter,fieldCharacter],
    [fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter,fieldCharacter],
    [fieldCharacter,hole,fieldCharacter,hole,fieldCharacter],
    [fieldCharacter,fieldCharacter,hat,fieldCharacter,fieldCharacter],
])
 
let gameFalse = false;
let gameWin = false;
let coordinatex = 0;
let coordinatey = 0;
while(!gameFalse && !gameWin){
    console.log(myField.print());
    let move = prompt('Which way? (Input r for right, l for left, d for down)' );
    if(move ===  'r' || move === 'R' ){
        if(myField.feild[coordinatex][coordinatey + 1] === hat){
            gameWin = true;
            console.log('You find your hat!');
        }else if(myField.feild[coordinatex][coordinatey + 1] === fieldCharacter){
            coordinatey++;
            myField.feild = [coordinatex,coordinatey];
        }else{
            gameFalse = true;
            console.log('You lost!');
        }
    }else if(move ===  'd' || move === 'D'){
        if(myField.feild[coordinatex + 1][coordinatey] === hat){
            gameWin = true;
            console.log('You find your hat!');
        }else if(myField.feild[coordinatex + 1][coordinatey] === fieldCharacter){
            coordinatex++;
            myField.feild = [coordinatex,coordinatey];
        }else{
            gameFalse = true;
            console.log('You lost!');
        }
    }else if(move ===  'l' || move === 'L'){
        if(myField.feild[coordinatex][coordinatey - 1] === hat){
            gameWin = true;
            console.log('You find your hat!');
        }else if(myField.feild[coordinatex][coordinatey - 1] === fieldCharacter){
            coordinatey--;
            myField.feild = [coordinatex,coordinatey];
        }else{
            gameFalse = true;
            console.log('You lost!');
        }
    }
}




