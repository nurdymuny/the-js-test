
var readLine = require('readline').createInterface(
	process.stdin, process.stdout
),

prompts = ['Pattern', 'Text'],
p = 0,
data = {};

var get = function(){
	readLine.setPrompt(prompts[p] + '> ' );
	readLine.prompt();
p++
};

get();

readLine.on('line', function(line){
	data[prompts[p - 1]] = line;

	if(p === prompts.length){
		return readLine.close();
	}

	get();
}).on('close', function(){
	var input_data = JSON.parse(JSON.stringify(data))
	var pattern = input_data.Pattern.split(',');
	var str = input_data.Text;
	var wordList = str.split(' ');
	var isPatternFollowed = true;
	for(var i = 0; i<wordList.length; i++){
		if (pattern[i] != wordList[i].charAt(0)){
			isPatternFollowed = false;
		}
	}

	if(isPatternFollowed){
		console.log('Yes the string matches the pattern.')
	}
	else{
		console.log('No the string does not match the pattern.')
	}
})