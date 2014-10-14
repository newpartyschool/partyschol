$('#editTimu').bind('click',function(){
/*	var url=$(this).attr('url');
			$.ajax({
				url: url,
				type:'json',

				success:function(result){
					//alert(msg);
					//if(msg>0)alert('更新题目成功');
					var data=result;
					alert(url);


					//console.log(msg);
				}*/
	var editTmContent = '<form><label for="timu">题目：</label><input id="timu" type="text" class="form-control" style="width:480px;" value="222" ><label for="">选项：</label><input id="ansA" type="text" class="form-control" placeholder="请输入选项A"><br><input id="ansB" type="text" class="form-control" placeholder="请输入选项B"><br><input id="ansC" type="text" class="form-control" placeholder="请输入选项C"><br><input id="ansD" type="text" class="form-control" placeholder="请输入选项D"><br><label for="timu">答案：</label><input id="rightAns" type="text" class="form-control" placeholder="如：答案：（A）"></form>';
	artDialog(
	{
		id:'question-form',
		title:'更新题目',
		content:editTmContent,
		yesText:'更新',
	},

	function(){
		var timu = $('#timu').val(),
			ansA = $('#ansA').val(),
			ansB = $('#ansB').val(),
			ansC = $('#ansC').val(),
			ansD = $('#ansD').val(), 
			rightAns = $('#rightAns').val();
		if (timu=="" || ansA == "" || ansB == "" || ansC == "" || ansD =="" || rightAns =="") {
			alert('题目相关数据都不能为空');
			return false;
		}else{
			$.ajax({
				url:'/admin/yy',
				type:'POST',
				data:{
					qeid:qeid,
					timu:timu,
					ansA:ansA,
					ansB:ansB,
					ansC:ansC,
					ansD:ansD,
					rightAns:rightAns
				},
				success:function(msg){
					//alert(msg);
					if(msg>0)alert('更新题目成功');
					//alert($)


					//console.log(msg);
				}
			});
		}

		
	},
	function(){
		return false;
	}
	);
});