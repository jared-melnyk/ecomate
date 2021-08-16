import MyButton from "./MyButton";
import { Container, Grid, Paper } from "@material-ui/core";
import OrderCard from "./OrderCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    margin: 15,
    backgroundColor: "#6A994E",
    color: "#F2E8CF",
  },
}));

const Report = (props) => {
  console.log("these are Report props: ", props);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.grid} maxwidth={"md"} spacing={2}>
        <Grid item xs={2}>
          <img
            className="report-logo"
            src="./sprout-logo-small.png"
            alt="logo"
          />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h1>Here is your EcoMate Report</h1>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <img id="main-image" src="./sprout-logo-small.png" alt="logo" />
        </Grid>
        {props.orderHistory.map((order) => (
          <Grid className={classes.grid} item xs={12}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <OrderCard order={order} />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        ))}
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <MyButton
            toggleReport={props.toggleReport}
            showReport={props.showReport}
          />
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.button} variant={"contained"}>
            Offset Shopping Footprint
          </Button>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Report;
