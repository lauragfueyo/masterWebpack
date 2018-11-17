 interface Student {
    name: string,
    city: string,
    works: string,
};
const student: Student = {
    name: 'Laura González Fueyo',
    city: 'Gijón',
    works: 'https://github.com/lauragfueyo',
};

var photo = require('../content/student.jpg');
const img = document.createElement('img');
img.src = photo;

const url = document.createElement('a');
url.href = student.works;

const infoStudent = document.createElement('strong');
const infoStudentCity = document.createElement('small');
const nameStudent = document.createTextNode(student.name);
const city = document.createTextNode(student.city); 

infoStudent.appendChild(nameStudent);
infoStudentCity.appendChild(city);
infoStudent.appendChild(infoStudentCity);

url.appendChild(infoStudent);
url.appendChild(img);

document.getElementById('info-student').appendChild(url);
//document.getElementById('info-student').appendChild(img); 