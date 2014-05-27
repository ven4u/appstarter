var PREDICT;
var PRIORITY = [];

function predict(temp_predict){
    //alert(predict); /*should display predict */
    //alert(PREDICT); /*should display undefined */
    PREDICT=temp_predict;
    //alert(PREDICT);  /*should display predict as a global variable value*/  
 }
function priority(){
   //alert(PREDICT);
    var predict_ids=["finance","love","education","work","travel"];
    //alert("test");
	var temppriority = []; /* initialised to make PRIORITY to have null at inital stages */
	PRIORITY = temppriority; /* to make PRIORITY NULL and then store ids and values to it */
    for(var i=0;i<predict_ids.length;i++){        
        var e = document.getElementById(predict_ids[i]);       
        var priority_value = e.options[e.selectedIndex].value;         
		PRIORITY.push({id:predict_ids[i],value:priority_value});		
	}
	/*	for(var i=0;i<PRIORITY.length;i++){
			alert("ID:- "  + PRIORITY[i].id + " Value:- "  + PRIORITY[i].value);
			}
    alert(PREDICT);
    // To check the values if entered correctly or not.
   */
    
}


function update(id){	
	alert(id);
	var yourbriefcase = document.getElementById('yourbriefcase').src.indexOf('yourbriefcase.png');
	alert(yourbriefcase);
		 if(document.getElementById("yourbriefcase").src.indexOf('yourbriefcase.png')>=0) {
			 	document.getElementById("yourbriefcase").src = document.getElementById(id).src;
		 }

	 document.getElementById(id).src="images/empty.png";
}