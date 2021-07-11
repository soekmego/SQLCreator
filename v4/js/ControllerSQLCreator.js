class ControllerSQLCreator {
    constructor(){

        // All data for SQLCreater constructor
        this.tableName; // var tableName = "mitarbeiter";
        this.tableColumnNames = []; // var tableColumnNames = ["persnr", "name", "email", "phone", "brand"];
        this.records; // var records = 10;

        // Get data form UI and prepare it to useful datastructure
        this.columnCounter = 0;
        this.allColumns = [];
        this.addFormIntoDOM();

        // UI bindings
        $("#addBtn").click(obj => {
            this.addFormIntoDOM();
        });

        // Add event to dynamically created element
        $("#table").on('change', 'select', function() {
            var selectedOption = $(this).find(":selected").val();
            //console.log(selectedOption);

            var parameterObject = {};
            var parameterObject = SQLCreator.getParameters(selectedOption);
            //console.log(parameterObject);

            // Short Syntax check if object is defined - true
            if(parameterObject){
                //console.log("parameterObject is defined: "+ true);

                var parameterHtml = "";
                var i=0;
                parameterObject.forEach(element => { 
                    parameterHtml += '<input name="parameter'+i+'" type="text" value="'+element.defaultValue+'">';
                    i++
                });
                
                //console.log(parameterHtml);
                $(this).parent().find('#parameter').html(parameterHtml); 

            }else{
                //console.log("parameterObject undefined: "+ false);
                $(this).parent().find('#parameter').html("");
            }
        });

        // Arrow function => this zeigt auf das Objekt
        $("#createBtn").click(obj => {
            this.create();
        });

        console.log("ControllerSQLCreator constructur executed");
    }

    create(){
        // Clear all arrays to start 
        this.tableName = $("#tableName").val();
        this.tableColumnNames = [];
        this.records = $("#numberOfRecords").val();
        this.allColumns = [];

        // Prepare data for cunstructor
        this.getFormData();
        this.getAllColumnNamesInArray();

        // SQLCreator - Data ready for constructor
        //console.log(this.tableName);
        //console.log(this.tableColumnNames);
        //console.log(this.records);
        var table1 = new SQLCreator(this.tableName, this.tableColumnNames, this.records);

        // Dynamic method call
        this.allColumns.forEach(element => {
            if(element.parameter == 0){
                table1[element.method](element.columnName);
            }else{
                var parameterObject = SQLCreator.convertArrayToObject(element.parameter);
                //console.log(element.method);
                //console.log(parameterObject);
                table1[element.method](element.columnName, parameterObject);
            }
        });

        // Output result in DOM
        document.getElementById("result").innerHTML = FormatString.breakStringInNewLine(table1.createSqlInsertStatement()); 
    }

    addFormIntoDOM(){
        // Absolut basic approach - no templating-engine used
        this.columnCounter++;
        var container = "#table";
        var completeForm = "";
        var formID = 'column'+this.columnCounter;
        var formStart = "<form id="+formID+">";
        var inputColumnName = '<input name="columnName" type="text" value="Column'+this.columnCounter+'">';
        var selectStart = '<select name="columnType" name="options" >';
        var selectEnd = '</select>';
        var inputParameter = '<input name="parameter" type="text" value="min">';
        var parameterContainer = '<div id="parameter"></div>';
        var formEnd = "</form>";

        // Start form
        completeForm = formStart;
        completeForm += inputColumnName;
        completeForm += selectStart;

        // Get static property from class
        SQLCreator.allOptions.forEach(function(obj){
            //console.log("value: " + obj.value +" method: " + obj.method);
            completeForm += '<option value="'+obj.value+'">'+obj.text+'</option>';
        });

        // Finish form
        completeForm += selectEnd;
        completeForm += parameterContainer;

        //Append form to UI
        $(container).append(completeForm);
    }

    getFormData(){
        for(let i=1; i <= this.columnCounter; i++){
            this.allColumns.push(this.transformDataToStructure($('#column'+i).serializeArray()));
        }
       //console.log(this.allColumns);
    }

    transformDataToStructure(arrayOneColumn){
        // Prefered Object structure - Template
        var myObject = {
            parameter : [],
        };
        arrayOneColumn.forEach(element => {
            var name = ""+element.name;
            var value = ""+element.value;
            //console.log(name);
            //console.log(value);
            
            if(name.includes('parameter')){
                myObject.parameter.push(value);
            }else{
                myObject[name] = value;
            }
        });
        //console.log(myObject);
        var oneColumnObjectWithMethodName = this.addMethodNameToColumnObject(myObject);
        //console.log(oneColumnObjectWithMethodName);
        return oneColumnObjectWithMethodName;
    }

    addMethodNameToColumnObject(oneColumnObject){
        var methodName = SQLCreator.getMethodName(oneColumnObject.columnType);
        oneColumnObject["method"] = methodName;
        return oneColumnObject;
    }

    getAllColumnNamesInArray(){
        this.allColumns.forEach(element => {
            //console.log(element.columnName);
            this.tableColumnNames.push(""+element.columnName);
        });
        //console.log(this.tableColumnNames);
    }

}