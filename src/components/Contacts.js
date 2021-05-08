import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

function Contacts(props){
  const classes = useStyles();
  return (
      <React.Fragment>
        <div ref={props.scrollRef}>
        </div>
      </React.Fragment>
  );
}

export default Contacts;
