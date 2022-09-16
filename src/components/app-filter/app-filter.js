import "./app-filter.css";

const AppFilter = () => {
   return (
      <div className="btn-group">
         <button type="button"
            className="btn btn-light">
            Все студенты
         </button>
         <button type="button"
            className="btn btn-outline-light">
            Возможность стипендии
         </button>
         <button type="button"
            className="btn btn-outline-light">
            Стипендия отличника
         </button>
      </div>
   )
}

export default AppFilter;