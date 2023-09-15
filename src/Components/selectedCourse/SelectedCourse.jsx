/* eslint-disable react/prop-types */

const SelectedCourse = ({ selectedCourses }) => {
  
  let num = 0;
  const number = () => {
    num++;
    return num;
  };
  return (
    <div>
        <h4 className="text-3xl font-semibold">Course Name</h4>
        <div className="mt-5">
            {selectedCourses.map((course) => (
        <div  key={course.id}>
            
          <p className="text-lg font-medium">
            {number()}. {course.Title}
          </p>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default SelectedCourse;
