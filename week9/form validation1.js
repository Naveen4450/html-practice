		function validate()
		{
		var name=document.st_form.name;
		var password=document.st_form.pass;
		var mobile=document.st_form.mobile;
		var email=document.st_form.email;
		var gen=document.st_form.gender;
		var course=document.st_form.course;
		if(name.value.length<=0)
		    {
			alert("Name is requeired");
			name.focus();
			return false;
		     }
		if(password.value.length<=0)
		{
			alert("Password is requeired");
			password.focus();
			return false;
		}
		if(mobile.value.length<=0)
		{
			alert("mobile is requeired");
			mobile.focus();
			return false;
		}
		if(email.value.length<=0)
		{
			alert("email id  is requeired");
			email.focus();
			return false;
		}
		if(gen.value.length<=0)
		{
			alert("gender is requeired");
			gender.focus();
			return false;
		}console.log(gen.value);

		if(course.value.length<=0)
		{
			alert("course is requeired");
			course.focus();
			return false;
		}
		return true;
	}		
	function validateString(id)
	{
		var element=document.getElementById(id);
		var regex=/^[a-zA-Z]+$/;
		if(!regex.test(element.value))
		  {
			//alert("Enter string value.");
			document.getElementById("lbluname").style.visibility="visible";
			element.style.border="2px solid red";
			return false;
		    }
		    document.getElementById("lbluname").style.visibility="hidden";
		    element.style.border="2px solid green";
		}
		function validateuname(id)
		{
			var element=document.getElementById(id)
			var regex=/^[a-zA-Z]+$/;
			if(!regex.test(element.value)|| element.value.length<=6 || element.value.length>=14 )
			{
				element.style.border="2px solid red";
				document.getElementById("lbluname").style.visibility="visible";
				return false;
			}
			document.getElementById("lbluname").style.visibility="hidden";
			element.style.border="2px solid green";
			return true;
		}
		function validatePass(id)
		{
			var element=document.getElementById(id);
			var passwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
			if(element.value.match(passwd)|| element.value.length>=4){
				document.getElementById("lblpass").style.visibility="hidden";
			element.style.border="2px solid green";
			return true;
			}
			else{
				element.style.border="2px solid red";
				document.getElementById("lblpass").style.visibility="visible";
				return false;
			}
		}
		function validateconpass(id)
		{
			var pw1=document.getElementById(id)
			var pw2=document.getElementById("lblpass")
			if(pw1!=pw2)
			{
				element.style.border="2px solid red";
				document.getElementById("lblconpass").style.visibility="visible";
				return false;
			}
			document.getElementById("lblconpass").style.visibility="hidden";
			element.style.border="2px solid green";
			return true;
		}
		function validateNumber(id)
		{
			var element=document.getElementById(id);
			var regex=/^[7-9][0-9]{9}$/;
			if(regex.test(element.value))
			{
				element.style.border="2px solid green";
				document.getElementById("lblmobile").style.visibility="hidden";
				return true;				
			 }
			 else{
			 //alert("enter the digits in a valid format");
			 document.getElementById("lblmobile").style.visibility="visible";
				element.style.border="2px solid red";
				return false;

			}
		}
		function validateEmail(id)
		{
			var ele=document.getElementById(id);
			var regxemail=/^([a-zA-Z0-9 \- \.]+)[@]([a-z]+)[\.][a-z]{2,3}$/;
			if(!regxemail.test(ele.value))
			{
			  //alert("enter the email valid format");
			  document.getElementById("lblemail").style.visibility="visible";
				ele.style.border="2px solid red";
				return false;
			}
			else
			{
			  document.getElementById("lblemail").style.visibility="hidden";
			  ele.style.border="2px solid green";
			  return true;
			 }

		}