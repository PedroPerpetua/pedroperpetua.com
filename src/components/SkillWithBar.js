
import { createStyles, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';


const NewLinearProgress = withStyles((theme) => createStyles({
  root: {
    top: "50%",
    transform: "translateY(-50%)",
    height: 12,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "LightGreen"
  },
  bar: {
    backgroundColor: "Green"
  }
}))(LinearProgress);


function SkillWithBar(props){
  const bars = [];

  for(let i of Array(5).keys()){
    let v = i < props.value ? 1:0;
    bars.push(
    <Grid item xs={2} key={i}>
      <NewLinearProgress
        variant="determinate"
        value={v * 100}
        />
    </Grid>
    );
  }

  return (
    <Grid container align="center" spacing={1}>
      <Grid item xs={2}>
        <Typography variant="button">
          {props.name}
        </Typography>
      </Grid>
      {bars}
    </Grid>
    );
}

export default SkillWithBar;
