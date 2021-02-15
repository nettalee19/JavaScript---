const school = {
  teachers: [
  {
  id: 1,
  name: "Pinchas",
  subjects: ["chemistry", "biology", "physics"],
  students: [],
  capacityLeft: 3,
  },
  {
  id: 2,
  name: "Williams",
  subjects: ["history", "ethics"],
  students: [],
  capacityLeft: 2,
  },
  ],
  students: [
      {
      id: 10,
      name: "Jennifer",
      age: 20,
      },
      {
      id: 11,
      name: "Howard",
      age: 23,
      },
      {
      id: 12,
      name: "Old-Timmy",
      age: 86,
      },
      {
        id: 13,
      name: "Houston",
      age: 21,
      },
    ],

    findPerson: function(type, id){
      if(type === 'teachers'){
        let teachArray = Object.valus(this.teachers);
        let found = teachArray.find(tutor => tutor.id === id);
        if(found !== undefined){
          return found;
        }
        else{
          console.log("id not exist");
        }
      }
      else if(type === 'students'){
        let studArray = Object.valus(this.students);
        let found = studArray.find(pupil => pupil.id === id);
        if(found !== undefined){
          return found;
        }
        else{
          console.log("id not exist");
        }
      }
      else{
        return "type not exist"
      }
    }

    assignStudent: function(id, subject){
      let student = this.findPerson('students', id);
      console.log(student);
      let teachArray= Object.values(this.teachers);
      console.log(teachArray);
      for(i=0 ; i<teachArray.length; i++){
        if(teachArray[i].subjects.push(subject) && teachArray[i].capacityLeft >0){
          teachArray[i].students.push(students);
          teachArray[i].capacityLeft -= 1;
          

        }
      }
    }

  };

  //let teac = console.log(school.findPerson(students, 1))
  school.findPerson(students, 13)










  // school.students.map(students => {
  //   console.log(students)
  // })

  // school.teachers.map(teachers => {
  //   console.log(teachers)
  // })

  