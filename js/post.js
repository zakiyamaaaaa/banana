$(function(){
		$('#trial-submit').on('click',function(ev){
			consolo.log("pushed");
            $.ajax({
                type:'POST',
                url:'../php/session.php',
                data:{"hoge":"postData",
            			"kkk":"aaa"},
                success : function(data){
                	console.log("success" + data);
                }
            });
        });
});