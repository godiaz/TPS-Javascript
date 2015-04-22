var mauro = [22, 400, 13, 25, 70, 56, 73, 15, 27, 39, 42, 24];
var pares = [];
var impares = [];

for (i = 0; i < mauro.length; i++)
{
	if (mauro[i] %2 === 0) {
		pares.push(mauro[i]);
	}
	else {
		impares.push(mauro[i]);
	}
};

console.log("Pares:" + pares);
console.log("Impares:" + impares);