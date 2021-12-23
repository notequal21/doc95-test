import './App.css';
import users from './state/data.json';
import style from './Table.module.scss'

function App() {

  let usersList = users.map(user => {
    return (
      <TableRow key={user.id} id={user.id} fullName={user.Fullname} days={user.Days} />
    )
  })

  return (
    <table className={`${style.table}`}>
      <tr className={`${style.tableHeader}`}>
        <th className={`${style.table__col}`}> User</th>
        <th className={`${style.table__col}`}>1</th>
        <th className={`${style.table__col}`}>2</th>
        <th className={`${style.table__col}`}>3</th>
        <th className={`${style.table__col}`}>4</th>
        <th className={`${style.table__col}`}>5</th>
        <th className={`${style.table__col}`}>6</th>
        <th className={`${style.table__col}`}>7</th>
        <th className={`${style.table__col}`}>8</th>
        <th className={`${style.table__col}`}>9</th>
        <th className={`${style.table__col}`}>10</th>
        <th className={`${style.table__col}`}>11</th>
        <th className={`${style.table__col}`}>12</th>
        <th className={`${style.table__col}`}>13</th>
        <th className={`${style.table__col}`}>14</th>
        <th className={`${style.table__col}`}>15</th>
        <th className={`${style.table__col}`}>16</th>
        <th className={`${style.table__col}`}>17</th>
        <th className={`${style.table__col}`}>18</th>
        <th className={`${style.table__col}`}>19</th>
        <th className={`${style.table__col}`}>20</th>
        <th className={`${style.table__col}`}>21</th>
        <th className={`${style.table__col}`}>22</th>
        <th className={`${style.table__col}`}>23</th>
        <th className={`${style.table__col}`}>24</th>
        <th className={`${style.table__col}`}>25</th>
        <th className={`${style.table__col}`}>26</th>
        <th className={`${style.table__col}`}>27</th>
        <th className={`${style.table__col}`}>28</th>
        <th className={`${style.table__col}`}>29</th>
        <th className={`${style.table__col}`}>30</th>
        <th className={`${style.table__col}`}>31</th>
        <th className={`${style.table__col}`}>Total</th>
      </tr>
      {usersList}
    </table>
  );
}

let TableRow = (props) => {
  let setDay = 0
  let days = []
  for (let index = 0; index < 31; index++) {
    let currentDay = props.days[setDay]
    if (currentDay != undefined) {
      currentDay = Number(currentDay.Date.split('-')[2])
    }
    if (currentDay == ++index) {
      const startTime = props.days[setDay].Start
      const endTime = props.days[setDay].End
      console.log(startTime, endTime);
      days.push(currentDay)
      setDay++
      --index
    } else {
      days.push(0)
      --index
    }
  }

  return (
    <tr className={`${style.tableRow}`}>
      <td className={`${style.table__col}`}>{props.fullName}</td>
      {
        days.map(item => <td className={`${style.table__col}`}>{item}</td>)
      }
      {/* {
        props.days.map(day => {
          return (
            <td className={`${style.table__col}`}>{days}</td>
          )
        })
      } */}
    </tr>
  )
}

export default App;
