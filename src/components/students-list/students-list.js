import StudentsListItem from "../students-list-item/students-list-item";

import './students-list.css';

const StudentsList = ({ data, onDelete, onToggleProp }) => {

   const elements = data.map(item => {
      const { id, ...itemProps } = item;

      return (
         <StudentsListItem key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />

      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default StudentsList;