load("fileaccess.js");

// var result = getFiles(".");

for(var i in result) {
  print(result[i].getCanonicalPath());
}

//$EXEC("C:\\Program Files\\Git\\bin\\git.exe status")
//$EXEC("git status")

//var m = `C:\\Program Files\\Git\\bin\\git.exe status`;
//var m = `git status`;
//print(m);
