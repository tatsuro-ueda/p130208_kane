$(function(){
	var arr = [];
	$("#sample div").each(function(){
		arr.push($(this).html());
	});
	arr.sort(function(){
		return Math.random() - Math.random();
	});
	$("#sample").empty();
	for(i=0; i < arr.length; i++){
		$(this).append('<div>' + arr[i] + '</div>');
	}
});