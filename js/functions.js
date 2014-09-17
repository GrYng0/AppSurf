function enableButtons()
{
	$('[type = button]').button('enable');
	$('[type = button]').button('refresh');
}
		
function disableButtons()
{
	$('[type = button]').button('disable');
	$('[type = button]').button('refresh');
}

function startDoc(nome, id, doc)
{
	//var obj = JSON.parse(doc);
	var today = new Date();
	
	doc.id = id;
	doc.date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
	doc.athlete = nome;
	
	//var doc = '{"id":"'+id+'", "date":"'+today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()+'", "athlete":"'+nome+'", "eventlist":[]}';
	
	
//	var doc = '<?xml version="1.0" encoding="UTF-8"?><session><details><date>';
//	
//	
//	
//	doc += today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
//	
//	doc += "</date>";
//	
//	doc += "<athlete>" + nome + "</athlete></details>";
	
	return doc;
}

function startEventList(doc)
{
	var now = new Date();
	var startTime = '{"starttime":"'+now.getHours()+ ':' + now.getMinutes() + ':' + now.getSeconds()+'"}';
	doc.eventlist.push(startTime); //= '<eventList starttime="'+now.getHours()+ ':' + now.getMinutes() + ':' + now.getSeconds() +'">';
	
	return doc;
}

function addEvent(time, type, doc)
{
	var eventtime = '{"time": "'+time+'"}';
	var eventtype = '{"type": "'+type+'"}';
	
	doc.eventlist.push([eventtime, eventtype]);
	
	return doc;
}




