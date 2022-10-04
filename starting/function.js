const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const gameElements = [hole, fieldCharacter];
const ratio = 60;
function holeFieldRatio(ratio){
    const numA = Math.floor(Math.random()*100);
    if(numA >= ratio){
        return 0;
    }else{ 
        return 1;
    }
}

function fieldCreater(row){
    let field = [];
    let line = [];
    for (let i = row ; i > 0 ; i--){
        for(let j = row ; j > 0 ; j --){
            if(i === row  && j === row){
                line.push(pathCharacter);
            }else {
                line.push(gameElements[holeFieldRatio(ratio)]);
            }
        }
        field.push(line);
        line = [];
    }
    let numA = Math.round(Math.random()*row)-1;
    if(numA <= -1){
        numA = 0;
    }else if(numA >= row -1){
        numA = row-1;
    }
    field[row-1][numA] = hat;
    return field;
}
//console.log(fieldCreater(5));

module.exports = {
    fieldCreater
};
