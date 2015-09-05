var sgf = require('smartgame');
var fs = require('fs');

var stage = require('./controller/stage');
var nodes = require('./controller/nodes');

var direct = {
	"sgf": "./sgfdatas/"
};
// 碁盤の大きさ
var size = 19;

stage.init(size);

fs.readdir(direct.sgf, function(err, files){
	for(var i=0;i<files.length;i++){
		var example = fs.readFileSync(direct.sgf+files[i], { encoding: 'utf8' });
		var collection = sgf.parse(example).gameTrees[0].nodes[0];

		stage.inc(nodes.select(collection));

		// console.log(stage.get());
		// break;
	}
	
	console.log(stage.get());
});


