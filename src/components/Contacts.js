import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  base: {
    backgroundColor: "white",
    padding: 50,
    marginTop: 100,
    marginBottom: 100
  }
}));


function Contacts(props){
  const classes = useStyles();
  return (
    <div className={classes.base} ref={props.scrollRef}>
      <Container>
        <Typography variant="h2">Contacts</Typography>
        <Typography variant="h6">To be added...</Typography>
      </Container>
    </div>
  );
}

export default Contacts;
