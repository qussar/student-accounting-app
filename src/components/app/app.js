import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StudentsAddForm from '../students-add-form/students-add-form';
import StudentsList from '../students-list/students-list';


import './app.css';
function App() {
   return (
      <div className="app">
         <AppInfo />

         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>


         <StudentsList />
         <StudentsAddForm />
      </div>

   );
}

export default App;
