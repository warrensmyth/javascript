function emailParts(email) {
	let processedEmail = email.toLowerCase().split("@");
	return `Username: ${processedEmail[0]}, Domain: ${processedEmail[1]}`;
}