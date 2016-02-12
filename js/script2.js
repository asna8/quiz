alert('Welcome to my show');
function hello()
{


	var score=0;
	var total=5;
	var q1=document.forms["quizform"]["q1"].value;
	var q2=document.forms["quizform"]["q2"].value;
    var q3=document.forms["quizform"]["q3"].value;
	var q4=document.forms["quizform"]["q4"].value;
	var q5=document.forms["quizform"]["q5"].value;
	for(i=1;i<=total;i++)
    {
    	if(eval('q'+i)==null || eval('q'+i)=='')
    	{
    		alert("You missed question "+ i);
    		return false;
    	}
    }
    var answer=['d','a','a','a','c'];
    for(i=1;i<=5;i++)
    	{
    		if(eval('q'+i)==answer[i-1])
    		{
    	     score++;
    		}
    	}

    
    	alert("You scored " + score + " out of " +total);

    	return false;
}
