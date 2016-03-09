load("fileaccess.js");

// jjs -scripting <script> -- args

// var result = getFilesRecursively($ARG[0]);

grepLogline("/home/mat013/data/javascript/javascript.jdk/myApp.log", "ERROR|done", "^\\d{4}")


// grep($ARG[0], $ARG[1]);

//var blacklist = {}; // or var map = {};
//blacklist["RemoteSystemsTempFiles"] = 0;
//var result = getGitDirectories($ARG[0], blacklist);
//for(var file in result) {
//    print(result[file]);
//}


//$EXEC("C:\\Program Files\\Git\\bin\\git.exe status")
//$EXEC("git status")

//var m = `C:\\Program Files\\Git\\bin\\git.exe status`;
//var m = `git status`;
//print(m);
