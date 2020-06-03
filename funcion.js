function calculo(){

	var quizA=document.android.quiz1.value; 
	var quizB=document.android.quiz2.value;
	var quizC=document.android.quiz3.value;
	var quizD=document.android.quiz4.value; 
	var quizE=document.android.quiz5.value;
	var quizF=document.android.quiz6.value;
	var quizG=document.android.quiz7.value; 
	var quizH=document.android.quiz8.value;
	var quizI=document.android.quiz9.value;
	var quizJ=document.android.quiz10.value; 
	var quizK=document.android.quiz11.value;
	var quizL=document.android.quiz12.value;
	var quizM=document.android.quiz13.value; 
	var quizN=document.android.quiz14.value;
	var quizÑ=document.android.quiz15.value;
	var quizO=document.android.quiz16.value;
	var quizP=document.android.quiz17.value;
	var cont=0;
    var resultado;

	if(document.getElementById('quiz153').checked){
		alert('culo');
		cant++;
	}
	if(quizA=='4'){
		cont++;
	}
	if(quizB=='6'){
		cont++;
	}
	if(quizC=='11'){
		cont++;
	}
	if(quizD=='14'){
		cont++;
	}
	if(quizE=='19'){
		cont++;
	}
	if(quizF=='21'){
		cont++;
	}
	if(quizG=='27'){
		cont++;
	}
	if(quizH=='32'){
		cont++;
	}
	if(quizI=='33'){
		cont++;
	}
	if(quizJ=='39'){
		cont++;
	}
	if(quizK=='44'){
		cont++;
	}
	if(quizL=='48'){
		cont++;
	}
	if(quizM=='49'){
		cont++;
	}
	if(quizN=='56'){
		cont++;
	}
	if(quizÑ=='58'){
		cont++;
	}
	if(quizO=='64'){
		cont++;
	}
	if(quizP=='65'){
		cont++;
	}

	resultado=cont*100/17;
	return resultado;
}