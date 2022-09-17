import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StudentsAddForm from '../students-add-form/students-add-form';
import StudentsList from '../students-list/students-list';


import './app.css';
function App() {

   const data = [
      { name: "Александр", stipend: 100, increase: false, id: 1 },
      { name: "Евгений", stipend: 100, increase: false, id: 2 },
      { name: "Анна", stipend: 100, increase: true, id: 3 },
      { name: "Cвета", stipend: 200, increase: false, id: 4 }
   ];

   return (
      <div className="app">
         <AppInfo />

         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>


         <StudentsList data={data} />
         <StudentsAddForm />
      </div>

   );
}

export default App;
