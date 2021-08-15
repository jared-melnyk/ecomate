import Button from "./Button";

const Report = (props) => {
  return (
    <div className="my-report-container">
      <h1>Here is your EcoMate Report</h1>
      <Button toggleReport={props.toggleReport} showReport={props.showReport} />
    </div>
  );
};

export default Report;
