import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Department from './Components/Department/Department';
import Table from './Components/Table/Table';
import Pagination from './Components/Table/Pagination';

import HealthChallenges from './Components/HealthChallenges/HealthChallenges';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      {/* <Department></Department> */}

      {/* <Pagination></Pagination> */}
      {/* <Table></Table> */}
      {/* <HealthChallenges></HealthChallenges> */}
    </div>
  );
}

export default App;
