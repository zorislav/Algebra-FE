const password = "abc123456789";

function chechUniqueChars(string) {
	const uniqueChars = _.uniq(string.split(""));
	return uniqueChars.length === string.length;
}

function checkNumericChars(password) {
	return /^\d+$/.test(password);
}

function truncatePassword(password) {
	return _.truncate(password, { length: 10, omission: "" });
}

console.log(chechUniqueChars(password));
console.log(checkNumericChars(password));
console.log(truncatePassword(password));
