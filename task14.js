var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("A value: " + a + "<br>")
document.write("B value: " + b + "<br>")
document.write("result is: " + result + "<br><br>");


--a;
result = --a - --b + ++b + b--;
document.write("A value: " + a + "<br>")
document.write("B value: " + b + "<br>")
document.write("result is: " + result + "<br><br>");

--a - --b;
result = --a - --b + ++b + b--;
document.write("A value: " + a + "<br>")
document.write("B value: " + b + "<br>")
document.write("result is: " + result + "<br><br>");

--a - --b + ++b;
result = --a - --b + ++b + b--;
document.write("A value: " + a + "<br>")
document.write("B value: " + b + "<br>")
document.write("result is: " + result + "<br><br>");

--a - --b + ++b + b--;
result = --a - --b + ++b + b--;
document.write("A value: " + a + "<br>")
document.write("B value: " + b + "<br>")
document.write("result is: " + result + "<br><br>");
