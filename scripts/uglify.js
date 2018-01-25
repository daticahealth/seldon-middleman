var glob = require("glob"),
    uglify = require("uglify-js"),
    fs = require("fs"),
    //TODO make this argument accessing safe
    in_dir = process.argv[2],
    out_dir = process.argv[3];

glob(in_dir+"/**/*.js", function(er, files) {

    files.forEach(function(filename) {
        var minified = uglify.minify(filename).code;
        // console.log(filename);
        // console.log(minified.substr(0,40));
        var pathParts = filename.split('/');
        var outFilename = out_dir + "/" + pathParts.slice(-1);
        // console.log(outFilename);

        fs.writeFile(outFilename, minified, function(err) {
            if(err) {
                throw err;
            }
            console.log("Minified " + outFilename);
        });
    });
});
