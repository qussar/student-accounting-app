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
            { name: "Алексей", stipend: 100, increase: false, rise: true, id: 1 },
            { name: "Евгений", stipend: 100, increase: false, rise: false, id: 2 },
            { name: "Анна", stipend: 100, increase: true, rise: false, id: 3 },
            { name: "Cвета", stipend: 200, increase: false, rise: false, id: 4 }
         ],
         term: '',
         filter: 'all'
      }
      this.maxId = 4;
   }

   deleteItem = (id) => {
      this.setState(({ data }) => {

         return {
            data: data.filter(item => item.id !== id)
         }
      })
   }

   addItem = (name, stipend) => {
      const newItem = {
         name,
         stipend,
         increase: false,
         rise: false,
         id: this.maxId++
      }
      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      });
   }

   onToggleProp = (id, prop) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return { ...item, [prop]: !item[prop] }
            }
            return item;
         })
      }))
   }

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter(item => {
         return item.name.indexOf(term) > -1
      })
   }

   onUpdateSearch = (term) => {
      this.setState({ term })
   }

   filterPost = (items, filter) => {
      switch (filter) {
         case 'rise':
            return items.filter(item => item.rise);
         case 'moreThen100':
            return items.filter(item => item.stipend > 100);
         default:
            return items
      }
   }

   onFilterSelect = (filter) => {
      this.setState({ filter });

   }

   render() {
      const { data, term, filter } = this.state;
      const students = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      const visibleData = this.filterPost(this.searchEmp(data, term), filter);
      return (
         <div className="app" >
            <AppInfo students={students} increased={increased} />

            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </div>


            <StudentsList
               data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp} />
            <StudentsAddForm onAdd={this.addItem} />
         </div>

      );
   }
}

export default App;
