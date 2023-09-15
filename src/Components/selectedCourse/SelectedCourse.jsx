/* eslint-disable react/prop-types */

const SelectedCourse = ({ selectedCourses ,totalCredit}) => {
  
  let num = 0;
  const number = () => {
    num++;
    return num;
  };
  return (
    <div>
        <h4 className="text-3xl font-semibold">Course Name</h4>
        <div className="mt-8">
            {selectedCourses.map((course) => (
        <div  key={course.id}>
            
          <p className="text-lg ">
            {number()}. {course.Title}
          </p>
        </div>
      ))}
      </div>
      <p  className="text-xl mt-10 font-medium">Total Credit Hour: {totalCredit}</p>
    </div>
  );
};

export default SelectedCourse;
