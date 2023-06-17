const password = "abc123";

function chechUniqueChars(string) {
	const uniqueChars = _.uniq(string.split(""));
	return uniqueChars.length === string.length;
}

function chechUniqueChars2(string) {
	return new Set(string).size === string.length; //set cannot have duplicate values
}

function checkNumericChars(string) {
	return /^\d+$/.test(string);
}
function checkNumericChars2(string) {
	for (let i = 0; i < string.length; i++) {
		if (string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57) {
			return false;
		}
	}
	return true;
}

function truncatePassword(string) {
	return _.truncate(string, { length: 10, omission: "" });
}
function truncatePassword2(string) {
	return string.slice(0, 10);
}

console.log("Unique1", chechUniqueChars(password));
console.log("Unique2", chechUniqueChars2(password));
console.log("Numeric1", checkNumericChars(password));
console.log("Numeric2", checkNumericChars2(password));
console.log("Trim1", truncatePassword(password));
console.log("Trim2", truncatePassword2(password));
console.log(new Set([2, 5, 8, 7, 5])); //doesn't work with array of objects
