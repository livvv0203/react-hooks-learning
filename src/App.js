import './App.css';
import UserFinder from './components/UserFinder';
// import Users from './components/Users';

function App() {

  const date = new Date();
  let weekString = '';

  if (date.getDay() == 1) {
    weekString = 'Mon';
  } 
  else if(date.getDay() == 2) {
    weekString = 'Tue';
  } 
  else if (date.getDay() == 3) {
    weekString = 'Wed';
  }

  console.log("Date: " + weekString);

  return <UserFinder></UserFinder>
}

export default App;
