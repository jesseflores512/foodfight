import React from 'react'
import { Grid } from 'material-ui'
import Tacos from './Tacos'
import Burgers from './Burgers'
import BBQ from './BBQ'
const styles = {
  Paper: { padding: 20, martinTop: 10, marginBotton:10}
}

export default props =>
  <Grid container>
    <Grid item sm>
      <Tacos styles={styles}/>
    </Grid>
    <Grid item sm>
      <Burgers styles={styles}/>
    </Grid>
    <Grid item sm>
      <BBQ styles={styles}/>
    </Grid>
  </Grid>
