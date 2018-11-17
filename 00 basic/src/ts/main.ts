 interface Student {
    name: string,
    city: string,
};
const student: Student = {
    name: 'Laura González Fueyo',
    city: 'Gijón'
};

var photo = require('../content/student.jpg');
const img = document.createElement('img');
img.src = photo;

const infoStudent = document.createElement('strong');
const infoStudentCity = document.createElement('small');
const nameStudent = document.createTextNode(student.name);
const city = document.createTextNode(student.city); 

infoStudent.appendChild(nameStudent);
infoStudentCity.appendChild(city);
infoStudent.appendChild(infoStudentCity);

document.getElementById('info-student').appendChild(infoStudent);
document.getElementById('info-student').appendChild(img); 