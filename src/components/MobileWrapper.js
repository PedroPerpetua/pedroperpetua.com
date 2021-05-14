import { withWidth } from '@material-ui/core';
import Container from '@material-ui/core/Container'


function MobileWrapper(props){
  const isLargeDevice = (props.width !== "xs" && props.width !== "sm");
  if(isLargeDevice)
    return (
      <div className={props.divClass}>
        <Container>
          {props.children}
        </Container>
      </div>
    );
    else
      return (
        <div className={props.divClass}>
          {props.children}
        </div>
      );
}

export default withWidth()(MobileWrapper);
