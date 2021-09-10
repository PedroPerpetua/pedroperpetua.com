import { withWidth } from '@material-ui/core';
import Container from '@material-ui/core/Container'


function MobileWrapper({ children, divClass, width }){
  const isLargeDevice = (width !== "xs" && width !== "sm");
  if(isLargeDevice) return (
    <div className={divClass}>
      <Container>
        {children}
      </Container>
    </div>
  );
  else return (
    <div className={divClass}>
      {children}
    </div>
  );
}


export default withWidth()(MobileWrapper);
