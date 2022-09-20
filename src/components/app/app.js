import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StudentsAddForm from '../students-add-form/students-add-form';
import StudentsList from '../students-list/students-list';

import './app.css';


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { name: "Александр", stipend: 100, increase: false, id: 1 },
            { name: "Евгений", stipend: 100, increase: false, id: 2 },
            { name: "Анна", stipend: 100, increase: true, id: 3 },
            { name: "Cвета", stipend: 200, increase: false, id: 4 }
         ]
      }
   }

   deleteItem = (id) => {
      this.setState(({ data }) => {
         // const index = data.findIndex(elem => elem.id === id);
         // const before = data.slice(0, index);
         // const after = data.slice(index + 1);

         // const newArr = [...before, ...after];
         // return {
         //    data: newArr
         // }
         return {
            data: data.filter(item => item.id !== id)
         }
      })
   }

   render() {
      return (
         <div className="app" >
            <AppInfo />

            <div className="search-panel">
               <SearchPanel />
               <AppFilter />
            </div>


            <StudentsList
               data={this.state.data}
               onDelete={this.deleteItem} />
            <StudentsAddForm />
         </div>

      );
   }
}

export default App;
