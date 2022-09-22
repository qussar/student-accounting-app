import './app-info.css';

const AppInfo = ({ increased, students }) => {
   return (
      <div className="app-info">
         <h1>Учет студентов в вузе N</h1>
         <h2>Общее число студентов: {students}</h2>
         <h2>Стипендию получат: {increased}</h2>
      </div>
   )
}

export default AppInfo