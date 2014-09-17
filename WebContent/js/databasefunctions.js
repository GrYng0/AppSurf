db = window.openDatabase("SURF_DB", "1.0", "The SURFAPP Database", 200000); //will create database Dummy_DB or open it
db.transaction(populateDB, errorCB1, successCB);

//create table and insert some record
function populateDB(tx)
{
	AddStatusLine("Populating DB...");
	tx.executeSql('CREATE TABLE IF NOT EXISTS SoccerPlayer (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT NOT NULL, Club TEXT NOT NULL)', false);
    tx.executeSql('INSERT INTO SoccerPlayer (Name, Club) VALUES ("Alexandre Pato", "AC Milan")', false);
    tx.executeSql('INSERT INTO SoccerPlayer (Name, Club) VALUES ("Van Persie", "Arsenal")', false);
    AddStatusLine("Database populated...");
}

//function will be called when an error occurred
function errorCB1(err) {
	AddStatusLine("Error populating SQL: "+err.code);
}

//function will be called when process succeed
function successCB() {
	var db = window.openDatabase("SURF_DB", "1.0", "The SURFAPP Database", 200000); //will create database Dummy_DB or open it
    db.transaction(queryDB, errorCB2, transactionSucess);
}

function transactionSucess()
{
	AddStatusLine("Transaction success...");
}

function errorCB2(err) {
	AddStatusLine("Error on transaction to query Data: "+err.message);
}
	    
	//select all from SoccerPlayer
function queryDB(tx){
    tx.executeSql('SELECT * FROM SoccerPlayer', [], querySuccess, errorCB3);
	}

function errorCB3(err) {
	AddStatusLine("Error Querying SQL Data: " + err.code);
}

function querySuccess(tx, result){
    	        
    AddStatusLine("Query Sucess!");
    
    var len = result.rows.lenght, i;
    
    for (i = 0; i < len; i++)
    {
		var row = result.rows.item(i);
        
        AddStatusLine(row['Name'] + row['Club']);
    }
	        
}
			