class FormatString {
    constructor(){

    }

    static breakStringInNewLine(breakString){

        //console.log(breakString);
        // Split string to array os strings        
        var step1 = breakString.replace(" VALUES ", " VALUES #");
        var step2 = step1.split("#");
        var step3 = step2[1].replaceAll("),", "),#");
        var step4 = step3.split("#");
        //var stringWithDelimiter = breakString.replace("),", "),#");
        //var fields = stringWithDelimiter.split("#");
        //console.log(step4); 

        //concatanate strings
        var finalString = step2[0] + "<br>";

        step4.forEach(element => {
            finalString += element + "<br>"
        });

        //console.log(finalString); 
        return finalString;
    }

}