//1.
const names = ['John', 'Jane', 'Bob',, 'Mike'];

for (const element of names) {
    console.log(element);
}

//2.
names.push('Zorislav');

//3.
for (const element of names) {
    if (element === 'Jane') break;
}

//4.
for (let i=0; i <= names.length -1; i++) {
    if (!names[i]) names.splice(i, 1);
}

console.log(names);
