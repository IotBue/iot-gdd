var socket = io();

socket.on('grow',function(message){
	console.log(message);
	
	d3.select("h2.mutate span.temp")
		.transition()
		.style("font-size", message.temperatura + "px")
		.text(message.temperatura);

	d3.select("h2.mutate span.hum")
		.transition().style("font-size", message.humedad + "px")
		.text(message.humedad);
	

})