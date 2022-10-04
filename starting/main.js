const prompt = require('prompt-sync')({sigint: true});
const path = require('node:path');
const process = require('node:process');
const {fieldCreater} = require('./function');
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const gameElements = [hat, hole, fieldCharacter, pathCharacter];

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

let myField = new Field(fieldCreater(5));
let gameFalse = false;
let gameWin = false;
let noWay = false;
let coordinatex = 0;
let coordinatey = 0;

while (1){
    while(!gameFalse && !gameWin){
        if(noWay === true ){
            myField = new Field(fieldCreater(5));
            noWay = false;
        }
        console.log(myField.print());
        let move = prompt('Which way? (Input r for right, l for left, d for down, or n for no way) ' );
        if (move === 'n' || move === 'N' ){
            noWay = true; 
            continue;
        }else if(move ===  'r' || move === 'R' ){
            if(myField.feild[coordinatex][coordinatey + 1] === hat){
                gameWin = true;
                console.log('You find your hat!');
                break;
            }else if(myField.feild[coordinatex][coordinatey + 1] === fieldCharacter){
                coordinatey++;
                myField.feild = [coordinatex,coordinatey];
            }else{
                gameFalse = true;
                console.log('You lost!');
                break;
            }
        }else if(move ===  'd' || move === 'D'){
            if(myField.feild[coordinatex + 1][coordinatey] === hat){
                gameWin = true;
                console.log('You find your hat!');
                break;
            }else if(myField.feild[coordinatex + 1][coordinatey] === fieldCharacter){
                coordinatex++;
                myField.feild = [coordinatex,coordinatey];
            }else{
                gameFalse = true;
                console.log('You lost!');
                break;
            }
        }else if(move ===  'l' || move === 'L'){
            if(myField.feild[coordinatex][coordinatey - 1] === hat){
                gameWin = true;
                console.log('You find your hat!');
                break;
            }else if(myField.feild[coordinatex][coordinatey - 1] === fieldCharacter){
                coordinatey--;
                myField.feild = [coordinatex,coordinatey];
            }else{
                gameFalse = true;
                console.log('You lost!');
                break;
            }
        }
    }
    let replay = prompt('Replay the game?(y/n)');
    if(replay === 'y'){
        gameFalse = false;
        gameWin = false;
        noWay = false;
        coordinatex = 0;
        coordinatey = 0;
        myField = new Field(fieldCreater(5));
        continue;
    }else {
        break;
    }
}