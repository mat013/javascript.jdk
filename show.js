load("fileaccess.js");

// jjs -scripting <script> -- args

//print($ARG[0]);

//var result = getFiles(".");

function grep(filename, patternString) {
    var imports = new JavaImporter(java.io);

    with(imports) {
        var bufferedReader = new BufferedReader(new FileReader(filename));

        var pattern = new RegExp(patternString);

        var lineCount = 0;
        for(var line = bufferedReader.readLine(); line != null; line = bufferedReader.readLine()) {
            lineCount++;
            if(pattern.test(line)) {
                print(lineCount + ": " + line);
            }
        }
        bufferedReader.close();
    }
}

grep($ARG[0], $ARG[1]);




//$EXEC("C:\\Program Files\\Git\\bin\\git.exe status")
//$EXEC("git status")

//var m = `C:\\Program Files\\Git\\bin\\git.exe status`;
//var m = `git status`;
//print(m);
