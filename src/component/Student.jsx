import Score from "./Score";

const Student = ({ studentsData }) => {
  return (
    <>
      <div>
        {studentsData.map((student) => (
          <>
            <h2>{student.name}</h2>
            <h3>{student.bio}</h3>
            <Score key={student} scores={student.scores} />
          </>
        ))}
      </div>
    </>
  );
};

export default Student;
