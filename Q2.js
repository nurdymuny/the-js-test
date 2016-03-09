#The Space-Time complexity of this program is O(n) as the loop runs for n times.

var readLine = require('readline').createInterface(
	process.stdin, process.stdout
),

prompts = ['Number'],
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
	var num = parseInt(input_data.Number);
	var sum = 0;
	if(num % 2 == 0){
		for(var i =0;i<num;i++){
			if(num % i == 0){
				sum += i;
				console.log(i);
			}
		}
		if(sum == num){
			console.log(num+" is a Perfect Number")
		}
		else{
			console.log(num+" is not a Perfect Number")
		}
	}
	else{
		console.log(num+" is not a Perfect Number")
	}	
})
