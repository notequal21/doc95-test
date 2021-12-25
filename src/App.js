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
    <>
      <div className={`${style.table}`}>
        <div className={`${style.tableRow}`}>
          <div className={`${style.table__firstCol}`}>
            User
          </div>
          <div className={`${style.table__col}`}>1</div>
          <div className={`${style.table__col}`}>2</div>
          <div className={`${style.table__col}`}>3</div>
          <div className={`${style.table__col}`}>4</div>
          <div className={`${style.table__col}`}>5</div>
          <div className={`${style.table__col}`}>6</div>
          <div className={`${style.table__col}`}>7</div>
          <div className={`${style.table__col}`}>8</div>
          <div className={`${style.table__col}`}>9</div>
          <div className={`${style.table__col}`}>10</div>
          <div className={`${style.table__col}`}>11</div>
          <div className={`${style.table__col}`}>12</div>
          <div className={`${style.table__col}`}>13</div>
          <div className={`${style.table__col}`}>14</div>
          <div className={`${style.table__col}`}>15</div>
          <div className={`${style.table__col}`}>16</div>
          <div className={`${style.table__col}`}>17</div>
          <div className={`${style.table__col}`}>18</div>
          <div className={`${style.table__col}`}>19</div>
          <div className={`${style.table__col}`}>20</div>
          <div className={`${style.table__col}`}>21</div>
          <div className={`${style.table__col}`}>22</div>
          <div className={`${style.table__col}`}>23</div>
          <div className={`${style.table__col}`}>24</div>
          <div className={`${style.table__col}`}>25</div>
          <div className={`${style.table__col}`}>26</div>
          <div className={`${style.table__col}`}>27</div>
          <div className={`${style.table__col}`}>28</div>
          <div className={`${style.table__col}`}>29</div>
          <div className={`${style.table__col}`}>30</div>
          <div className={`${style.table__col}`}>31</div>
          <div className={`${style.table__lastCol}`}>
            Total
          </div>
        </div>
        {usersList}
      </div>
    </>
  );
}

let TableRow = (props) => {
  let setDay = 0
  let days = []
  let totalTimeArr = []
  let totalTime = 0
  for (let index = 0; index < 31; index++) {
    let currentDay = props.days[setDay]
    if (currentDay != undefined) {
      currentDay = Number(currentDay.Date.split('-')[2])
    }
    if (currentDay == ++index) {
      const startTime = props.days[setDay].Start.split('-')
      const endTime = props.days[setDay].End.split('-')
      const startTimeInMinutes = (Number(startTime[0]) * 60) + Number(startTime[1])
      const endTimeInMinutes = (Number(endTime[0]) * 60) + Number(endTime[1])
      const totalDayTime = `${Math.floor((endTimeInMinutes - startTimeInMinutes) / 60)} Ч. ${(endTimeInMinutes - startTimeInMinutes) % 60} Мни.`
      const totalMinutes = endTimeInMinutes - startTimeInMinutes
      totalTimeArr.push(Number(totalMinutes))
      totalTime = totalTimeArr.reduce((prev, next) => prev + next)
      days.push(totalDayTime)
      setDay++
      --index
    } else {
      days.push(0)
      --index
    }
  }

  return (
    <div className={`${style.tableRow}`}>
      <div className={`${style.table__firstCol}`}>
        {props.fullName}
      </div>
      {
        days.map(item => <div className={`${style.table__col}`}>{item}</div>)
      }
      <div className={`${style.table__lastCol}`}>
        {
          `${Math.floor(totalTime / 60)} ч. ${totalTime % 60} мин.`
        }
      </div>
    </div>
  )
}

export default App;
