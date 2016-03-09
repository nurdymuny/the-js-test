var readLine = require('readline').createInterface(
	process.stdin, process.stdout
),

prompts = ['Title', 'Timings', 'Do you want to schedule a new meeting?'],
p = 0,
data = [];

var get = function(){
	readLine.setPrompt(prompts[p] + '> ' );
	readLine.prompt();
p++;
};

get();

readLine.on('line', function(line){
	
	while(line != 'n' || line != 'N'){
		console.log(p);
		meeting = {};
		meeting[prompts[p - 1]] = line;
		if(p === prompts.length){
			p = 0;
			meeting = meeting[meeting.length - 1];
			var roomFound = false;
			var curStartTime = parseInt(meeting.Timings.split('-')[0]);
			var curEndTime = parseInt(meeting.Timings.split('-')[1]);

			for ( roomIdx  = 0 ; roomIdx < rooms.length ; roomIdx ++) 
			{
			    room = rooms[roomIdx];
			    for ( slotIdx =0 ; slotIdx < room.length ; slotIdx++)
			    {
			    	var roomStartTime = parseInt(room[slotidx].Timings.split('-')[0])
			    	var roomEndTime = parseInt(room[slotidx].Timings.split('-')[0])
			        if (curStartTime < roomStartTime  && curEndTime <= roomStartTime) 
			        { 
			            room.push(meeting);
			            roomFound =  true;
			        } else if( curStartTime > roomStartTime && curEndTime < roomStartTime)
			        {
			            roomFound =  true; 
			            room.push(meeting);
			        }
			        else{
			        	continue;
			        }
			    }
			}

			if (!roomFound)
			{
				rooms[rooms.length]
				rooms[rooms.length].push(meeting)
			}
			
		}

	get();
	}
	for(var roomIdx =0; roomIdx<rooms.length; roomIdx++){
		data['room-'+roomIdx.toString()] = rooms[roomIdx];
	}
	return readLine.close();
}).on('close', function(){
	var response_data = JSON.parse(JSON.stringify(data));
	console.log(response_data);
})