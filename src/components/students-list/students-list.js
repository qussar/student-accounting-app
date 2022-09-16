import StudentsListItem from "../students-list-item/students-list-item";

import './students-list.css';

const StudentsList = () => {
   return (
      <ul className="app-list list-group">
         <StudentsListItem />
         <StudentsListItem />
         <StudentsListItem />
      </ul>
   )
}

export default StudentsList;