import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Department from './Components/Department/Department';
import Table from './Components/Table/Table';
import Pagination from './Components/Table/Pagination';
import ActiveAdmission from './Components/ActiveAdmission/ActiveAdmission';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Department></Department>
      <ActiveAdmission></ActiveAdmission>
      <Pagination></Pagination>
      <Table></Table>
    </div>
  );
}

export default App;
