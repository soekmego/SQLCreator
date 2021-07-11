class Factory {
    constructor(){}

    getRandomNumber(min, max) {
        const minINT = parseInt(min, 10);
        const maxINT = parseInt(max, 10);
        var randomNumber = Math.floor(Math.random() * (maxINT - minINT) + minINT);
        //console.log(randomNumber);
        return randomNumber;
    }

    getRandomFloatNumber(min, max, precision) {
        var randomFloatNumber = Math.floor(Math.random() * ((max - min) * precision - 1 * precision) + min * precision) / (1*precision);
        //console.log(randomFloatNumber);
        return randomFloatNumber;
    }

    getRandomItemFromArray(anyArray) {
        var randomNumber = Math.floor(Math.random() * anyArray.length); 
        var randomValueFromArray = anyArray[randomNumber];
        //console.log("randomValueFromArray: " + randomValueFromArray);
        return randomValueFromArray;
    }

    getIndexOfColumnName(columnName) {
        // Parameter umbauen Arrayübergeben
        var index = 0;
        for(var m=0; m < this.entity.tableColumns.length; m++){
            if(this.entity.tableColumns[m].columnName == columnName) {
                //console.log(m);
                return (index = m);
            }
        }
        if(index == 0) {
            console.error("columnName doesn't exists in structure");
        }
    }
 
}