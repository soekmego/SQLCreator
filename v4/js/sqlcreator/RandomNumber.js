class RandomNumber extends Factory {

    constructor(){
        super();
    }

    getRandomPhoneNumber(){
        var telephoneAreaCode = "+" + this.getRandomNumber(100, 999);
        var telephoneNumber = " " + this.getRandomNumber(1000000, 9999999);
        var completePhoneNumber = telephoneAreaCode + telephoneNumber;
        //console.log(completePhoneNumber);
        return completePhoneNumber;
    }

}