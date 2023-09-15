import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';
import SelectedCourse from '../selectedCourse/SelectedCourse';
import swal from 'sweetalert';

const Home = () => {
  const [Courses, setCourses] = useState([]);
const [selectedCourses,setSelectedCourses]=useState([])
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  
  const handleSelected =(selectedCourse)=>{
 const alreadyExist = selectedCourses.find(course => course.Title == selectedCourse.Title)
 if(alreadyExist){
   return swal("Already selected", "", "error");
}else{
    const newSelectedCourse =[...selectedCourses,selectedCourse]
      setSelectedCourses(newSelectedCourse)}

        
  }

  return (
    <div className='container mx-auto flex gap-4'>
    <div className='grid gap-10 w-[70%] md:w-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {Courses.map(course => (
        <Course
        key={course.id}
        handleSelected={handleSelected}
        Courses={course}
        ></Course>
      ))}
    </div>
      <div className='w-[30%] md:w-1/4 pl-1 lg:pl-14'>
        <SelectedCourse
        selectedCourses={selectedCourses}
        ></SelectedCourse>
      </div>
    </div>
  );
};

export default Home;
