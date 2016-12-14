var actualYear = 2016;
	var actualMonth = 12;
	var actualDay = 13;
	var birthYear = 1980;
	var birthMonth = 11;
	var birthDay = 7;
	var age = actualYear - birthYear;


	function captainAge (){
		if (actualYear > birthYear)
			return age;
		else if (actualYear > birthYear && actualMonth < birthMonth)
			return age - 1;
		else if (actualYear > birthYear && actualMonth == birthMonth && actualDay < birthDay)
			return age - 1;
		else if (actualYear == birthYear && actualMonth > birthMonth)
			age= actualMonth - birthMonth;
		
			return age;	
	}	
	console.log(captainAge());

