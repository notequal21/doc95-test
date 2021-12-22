import logo from './logo.svg';
import './App.css';
import users from './state/data.json';

function App() {
  let usersList = users.map(u => <UserCard id={u.id} fullName={u.Fullname} />)
  return (
    <div>
      {usersList}
    </div>
  );
}

let UserCard = (props) => {
  return (
    <div>
      {props.id}-{props.fullName}
    </div>
  )
}

export default App;
