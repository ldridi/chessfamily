var db = openDatabase("my.db", '1.0', "My WebSQL Database", 2 * 1024 * 1024);
var create = function() {
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS user (id integer primary key, firstname text, lastname text, id_member text)");
    });
}