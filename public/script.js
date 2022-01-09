function emails(email, elabel) {
	const reg = /^([a-zA-Z0-9\.\-])+\@([a-zA-Z0-9\-])+\.([a-z]{2,3})([a-z]{2,3})?$/;
	if (reg.test(email.value)) {
		email.style.borderColor = "green";
		elabel.innerText = "";
		return true;
	} else {
		email.style.borderColor = "red";
		elabel.innerText = "Please provide valid email";
		return false;
	}
}
