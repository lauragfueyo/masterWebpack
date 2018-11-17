interface Student {
    name: string,
    image: string,
    city: string,
};
const student: Student = {
    name: 'Laura González Fueyo',
    image: 'src/content/student.jpg',
    city: 'Gijón'
};

const img = document.createElement('img');
img.src = student.image;

const infoStudent = document.createElement('strong');
const infoStudentCity = document.createElement('small');
const nameStudent = document.createTextNode(student.name);
const city = document.createTextNode(student.city); 

infoStudent.appendChild(nameStudent);
infoStudentCity.appendChild(city);
infoStudent.appendChild(infoStudentCity);

document.getElementById('info-student').appendChild(infoStudent);
document.getElementById('info-student').appendChild(img);