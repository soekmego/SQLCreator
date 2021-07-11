class SQLCreator extends Factory{

       // all options for ui
    static allOptions = [
        {value: "AutoIncrementId", text: "Auto Increment ID", method: "insertAutoIncrementIdInto"},
        {value: "Id", text: "Random ID", method: "insertRandomIdInto"},
        {value: "Number", text: "Random Number", method: "insertRandomNumberInto", parameter: [{ name: "min", defaultValue: 0 }, { name: "max", defaultValue: 1000 }] }, // min, max, 2 Parameter
        {value: "HumanName", text: "Human name", method: "insertRandomHumanNameInto"},
        {value: "BrandName", text: "Brand name", method: "insertRandomBrandNameInto"},
        {value: "CompanyName", text: "Company name", method: "insertRandomCompanyNameInto"},
        {value: "Address", text: "Address", method: "insertRandomAddressInto"},
        {value: "CityName", text: "City", method: "insertRandomCityNameInto"},
        {value: "Email", text: "Email", method: "insertRandomEmailInto"},
        {value: "PhoneNumber", text: "Phone Number", method: "insertRandomPhoneNumberInto"},
    ];

    static getMethodName(value){
        var returnValue = "";
        this.allOptions.forEach(option => {
            if(value == option.value){
                //console.log(option.method);
                returnValue = option.method;
            } 
        });
        return returnValue;
    }

    static getParameters(value){
        // Get oneOption
        var oneOption = {}; // Initialize an object important
        this.allOptions.forEach(option => {
            if(value == option.value){
                //console.log(option.method);
                oneOption = option;
            } 
        });
        //console.log(oneOption);

        if('parameter' in oneOption){
            //console.log(true);
            //console.log(oneOption.parameter);
            return oneOption.parameter;
        }else{
            //console.log(false);
        }
    }

    static convertArrayToObject(oneArray){
        //alert("Test");
        var object = {};
        var i=1;
        oneArray.forEach(element => {
            object['parameter'+i] = element;
            i++
        });
        //console.log(object);
        return object;
    }

    constructor(tableName, tableColumns, records) {
        super();

        // 1. table structure
        this.entity = {};
        this.tableName = tableName;
        this.tableColumns = tableColumns;
        this.records = records;
        this.createTableStructure();
        
        // 2. random data objects
        this.RandomName = new RandomName();
        this.RandomNumber = new RandomNumber();
        this.RandomGeoData = new RandomGeoData();

        console.log("SQLCreator constructor executed");
    }

    createTableStructure () {
        /*
        structureExample = {
            "tableName" : "",
            "tableColumns" : [
                {
                    columnName : "",
                    values: []
                }
            ]
        }
        */

        var structureTemplate = { "tableName" : "", "tableColumns" : [] };
        var columnObjectTemplate = { columnName: "", values: [] };

        // insert column names into table structure
        structureTemplate.tableName = this.tableName;
        this.tableColumns.forEach(element => {
            structureTemplate.tableColumns.push({
                columnName: element,
                values: []
            })
        });

        this.entity = structureTemplate;
        console.log(structureTemplate);
    }

    addColumnToTableStructure(columnName){
        this.entity.tableColumns.push({
            columnName: columnName,
            values: []
        })
        return this.getIndexOfColumnName(columnName);
    }

    insertAutoIncrementIdInto(columnName) {
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];
  
        for(var i=1; i <= this.records; i++){
            this.entity.tableColumns[index].values.push(""+ i);
        }
    }

    insertRandomIdInto(columnName) {
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];

        for(var i=0; i < this.records; i++){
            var randomNumberInsideARange = "" + this.getRandomNumber(1, this.records);
            this.entity.tableColumns[index].values.push(randomNumberInsideARange);
        }
    }

    insertRandomNumberInto(columnName, parameterObject){
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];
        //console.log(parameterObject);
        for(var i=0; i < this.records; i++){
            var randomNumberInsideARange = "" + this.getRandomNumber(parameterObject.parameter1, parameterObject.parameter2);
            this.entity.tableColumns[index].values.push(randomNumberInsideARange);
        }
    }

/*     insertRandomNumberInto(columnName, min, max){
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];

        for(var i=0; i < this.records; i++){
            var randomNumberInsideARange = "" + this.getRandomNumber(min, max);
            this.entity.tableColumns[index].values.push(randomNumberInsideARange);
        }
    } */

    insertRandomHumanNameInto(columnName){
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];

        for(var i=0; i < this.records; i++){
            var randomNumberInsideARange = this.RandomName.getRandomHumanName();
            this.entity.tableColumns[index].values.push(randomNumberInsideARange);
        }
    }

    insertRandomBrandNameInto(columnName){
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];

        for(var i=0; i < this.records; i++){
            var randomCompanyName = this.RandomName.getRandomBrandName();
            this.entity.tableColumns[index].values.push(randomCompanyName);
        }
    }

    insertRandomCompanyNameInto(columnName){
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];

        for(var i=0; i < this.records; i++){
            var randomCompanyName = this.RandomName.getRandomCompanyName();
            this.entity.tableColumns[index].values.push(randomCompanyName);
        }
    }

    insertRandomAddressInto(columnName){
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];
        
        for(var i=0; i < this.records; i++){
            var randomAddressName = this.RandomName.getRandomAddress();
            this.entity.tableColumns[index].values.push(randomAddressName);
        }
    }

    insertRandomCityNameInto(columnName){
        var indexCity = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[indexCity].values = [];

        for(var i=0; i < this.records; i++){
            var randomCityName = this.RandomName.getRandomCityName();
            this.entity.tableColumns[indexCity].values.push(randomCityName);
        }
    }

    insertRandomEmailInto(columnName){
        var index = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[index].values = [];

        for(var i=0; i < this.records; i++){
            var randomEmail = this.RandomName.getRandomEmail();
            this.entity.tableColumns[index].values.push(randomEmail);
        }
    }

    insertRandomPhoneNumberInto(columnName){
        // Überprüfung - Telefonnummer soll nicht doppelt vorkommen!!!
        var indexPhone = this.getIndexOfColumnName(columnName);
        this.entity.tableColumns[indexPhone].values = [];

        for(var i=0; i < this.records; i++){
            var completePhoneNumber = this.RandomNumber.getRandomPhoneNumber();
            this.entity.tableColumns[indexPhone].values.push(completePhoneNumber);
        }
    }

    insertRandomGeoData(){
        // add two new columns to table structure
        var indexColumnLatitude = this.addColumnToTableStructure("latitude");
        var indexColumnLongitude = this.addColumnToTableStructure("longitude");

        // be sure valueArrays are empty
        this.entity.tableColumns[indexColumnLatitude].values = [];
        this.entity.tableColumns[indexColumnLongitude].values = [];

        for(var i=0; i < this.records; i++){
            var geoPoint = this.RandomGeoData.getRandomPlace();
            //console.log(geoPoint);
            this.entity.tableColumns[indexColumnLatitude].values.push(geoPoint.rX);
            this.entity.tableColumns[indexColumnLongitude].values.push(geoPoint.rY); 
        }
    }

    createSqlInsertStatement() {
        //SQL statement structure
        var str1 = "INSERT INTO " + this.entity.tableName +" (";
        var str2 = "";
        var str3 = ") VALUES ";
        var str4 = "";
        var str5 = ";";
    
        //add column names to string
        this.entity.tableColumns.forEach(element => {
            str2 += element.columnName + ", ";
        });
        str2 = str2.slice(0, -2);

        //create data records
        for(var i=0; i < this.records; i++){
            str4 += "("
            for(var m=0; m < this.entity.tableColumns.length; m++){
                str4 += "\'" +  this.entity.tableColumns[m].values[i] + "\', ";
            }
            str4 = str4.slice(0, -2);
            str4 += "),";
        }

        // slice last comma from string
        str4 = str4.slice(0, -1);

        var sqlInsertString =  str1 + str2 + str3 + str4 + str5;
        //console.log(sqlInsertString);
        return sqlInsertString;
    }

}