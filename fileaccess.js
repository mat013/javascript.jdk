function getFiles(root) {
    var result = [];

    var currentDir = new java.io.File(root);
    var files = currentDir.listFiles();
    for(var fileIndex in files) {
        var file = files[fileIndex];
        result.push(file);
  
        if(file.isDirectory()) {
	    result = result.concat(getFiles(file.toString()));
	}

    }
    return result;
}
