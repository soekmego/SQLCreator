class RandomGeoData extends Factory{

    // Enum in Javascript
    // Fake const!!!
    static country = { 
        AT: {
            "code" : "AT", 
            "geo": { latitude: 47.716665, longitude: 15.063393 }
        },
        DE: {
            "code" : "DE", 
            "geo": { latitude: 48.733726, longitude: 10.634905 }
        }, 
        CH: {
            "code" : "CH", 
            "geo": { latitude: 47.067289, longitude: 8.030771 }
        } 
    };

    constructor(){
        super();

        // min/max coordinates on earth
        this.maxLongitude = 180;
        this.minLongitude = -180;
        this.maxLatitude = 85.05112878;
        this.minLatitude = -85.05112878;

        this.countryCode = ["AT", "DE", "CH"]; 
        this.countries = [
            {
                "countryCode" : "AT", 
                "geo": { latitude: 47.716665, longitude: 15.063393 },
            },
            {
                "countryCode" : "DE", 
                "geo": { latitude: 48.733726, longitude: 10.634905 },
            },
            {
                "countryCode" : "CH", 
                "geo": { latitude: 47.067289, longitude: 8.030771 },
            }
        ]

    }

    getRandomAvailableCountry(){
        var RandomAvailableCountry = this.countires[super.getRandomNumber(0, this.availableCountries2.length)];
        //console.log(RandomAvailableCountry);
        return RandomAvailableCountry.countryCode;
    }

    getRandomPlace(){
        var rX = this.getRandomFloatNumber(this.minLongitude, this.maxLongitude, 1000000);
        var rY = this.getRandomFloatNumber(this.minLatitude, this.maxLatitude, 1000000);
        var geoData = {rX, rY};
        //console.log(geoData);
        return geoData;
    }

}
