import '../App.css';

function StudentDetails(props) {
  return (
    <div className="App">
      <div className='person grid-item'>
        <h2>Student name: {props.name}</h2>
        <h3>Student Roll No: {props.num}</h3>
        <h3>Div: {props.division}</h3>
      </div>
    </div>
  );
}

export default StudentDetails;
