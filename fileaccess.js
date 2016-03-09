function getGitDirectories(root, blacklist) {
    var result = [];

    var currentDir = new java.io.File(root);
    var files = currentDir.listFiles();

    var hasGit = false;
    for(var fileIndex in files) {
        var file = files[fileIndex];
        if(file.getName() === ".git") {
            hasGit = true;
            break;
        }
    }

    if(hasGit) {
        return result;
    }

    for(var fileIndex in files) {
        var file = files[fileIndex];
  
        if(file.isDirectory()) {
            var filename = file.getName();
	    if(!(filename in blacklist) && filename.indexOf(".") != 0 ) {
	        result.push(file);
                result = result.concat(getGitDirectories(file.getCanonicalPath(), blacklist));
    	    }
	}
    }
    return result;
};


function getFilesRecursively(root) {
    var result = [];

    var currentDir = new java.io.File(root);
    var files = currentDir.listFiles();
    for(var fileIndex in files) {
        var file = files[fileIndex];
        result.push(file);
  
        if(file.isDirectory()) {
	    result = result.concat(getFilesRecursively(file.toString()));
	}

    }
    return result;
};

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
};

function printlines(linenumber, pattern, lineBuffer) {
    if(lineBuffer.size() > 0 && pattern.test(lineBuffer.get(0))) {
        for(var i = 0; i < lineBuffer.size(); ++i) {
            print(linenumber++ + ":" + lineBuffer.get(i));
        }
    }
}

// bug: lineCount is not 100% correct
function grepLogline(filename, patternString, linePrefix) {
    var imports = new JavaImporter(java.io, java.util);

    with(imports) {
        var bufferedReader = new BufferedReader(new FileReader(filename));

        var lineBuffer = new ArrayList();

        var pattern = new RegExp(patternString);
        var prefixPattern = new RegExp(linePrefix);

        var lineCount = 0;
        for(var line = bufferedReader.readLine(); line != null; line = bufferedReader.readLine()) {
            lineCount++;
            if(prefixPattern.test(line)) {
		printlines(lineCount, pattern, lineBuffer);
                lineBuffer.clear();
            }
            lineBuffer.add(line);
        }
        printlines(lineCount, pattern, lineBuffer);

        bufferedReader.close();
    }
};

