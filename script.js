//requires jquery
let lines,data,body,temp_div;


lines = $('.views-table tbody tr');
data = [];
body = $('body');
body.prepend('<div id="temp_div" style="display:none;opacity:0;"></div>');
temp_div = $('#temp_div');
$.each(lines, function(k,line_temp){

	let temp_data = [];
	let line = $(line_temp);

	let temp_url = 'https://employment.ku.edu'+line.find('a').attr('href');
	temp_div.load(temp_url+' .group-salary-range .field-item',function(){
		temp_data.push(temp_div.text());
		console.log(temp_data[0]);
	});

	temp_data.push(temp_url);

	$.each(line.find('td'),function(k,el){
		temp_data.push($(el).text().trim());
	});

	data.push(temp_data);

});


console.log(JSON.stringify(data));