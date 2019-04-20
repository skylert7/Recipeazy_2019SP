var jwtDecode = require('jwt-decode');
const jwt = require("jsonwebtoken")

var to_encode = { authenticated: true, iat: 1555738934 }
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoZW50aWNhdGVkIjpmYWxzZSwiaWF0IjoxNTU1NzQwMzExfQ.0to90VG98z3fdcTXNh8iThH1s_KtO0wmqwM8_rcTqHc'
var decoded = jwtDecode(token);
console.log(decoded);
to_encode = jwt.sign({authenticated: true, iat: 1555740311}, 'admin')
console.log(to_encode)
decoded = jwtDecode(token);
console.log(decoded);
