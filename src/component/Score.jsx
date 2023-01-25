const Score = ({ scores }) => {
  return (
    <>
      <div>
        {scores.map((score) => (
          <>
            <h4>Date: {score.date}</h4>
            <h4>Score: {score.score}</h4>
          </>
        ))}
      </div>
    </>
  );
};

export default Score;
