/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign ,faBookOpen} from '@fortawesome/free-solid-svg-icons'


const Course = ({ Courses ,handleSelected}) => {
  return (
    
      <div className='card bg-slate-300 shadow-xl'>
        <figure>
          <img
          className="w-full h-[200px]"
            src={Courses.img}
            alt=''
          />
        </figure>
        <div className='card-body'>
          <h2 className="text-lg font-semibold">{Courses.Title}</h2>
          <p>{Courses.Content}</p>
          <div className="flex gap-4 mx-4 lg:mx-2 lg:gap-2  items-center">
            <div> <FontAwesomeIcon className=" h-5 " icon={faDollarSign} /></div>
         
          <p>Price:{Courses.Price}</p>
          <div> <FontAwesomeIcon icon={faBookOpen} /></div>
         
          <p>Credit: {Courses.Credit}</p>
          </div>
          <button onClick={()=>handleSelected(Courses)} className="btn btn-active btn-primary mt-4 text-white
           text-lg font-bold">Selected</button>
        </div>
      </div>
    
  );
};

export default Course;
