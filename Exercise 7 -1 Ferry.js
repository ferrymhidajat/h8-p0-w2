var line, triangle;
line = triangle = "";

for (var row = 1; row <= 5; row++) {
  line += "*";
  triangle += line + "\n";
}

console.log(triangle);