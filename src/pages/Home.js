import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import styles from './commonStyles.js';
import { ThemeContext } from "./util/config.js";
import Grid from '@material-ui/core/Grid';
import formattedData, { q_descriptions } from './data.js';

const teams = [1, 2, 3, 4]
const qs = Array.from({ length: 25 }, (_, i) => i + 1);

class Home extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.images = [];
  }

  // Fallback function if an image fails to load
  handleImageError = (e) => {
    // Replaces the broken source with a styled transparent spacer or a placeholder image 
    e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='167' viewBox='0 0 300 167'><rect width='100%' height='100%' fill='%23eeeeee'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23888888'>No Submission</text></svg>";
  };

  render() {
    const { classes } = this.props;

    // Standardized inline styles to guarantee matching dimensions
    

    return (
      <div className="Home">
        <Paper className={classes.paper}>
          <h2>Submissions</h2>
          <Divider />
          <div> <br/>
          
          {qs.map(q => 
            <Paper className={classes.paper}>
              <h3 style={{ marginTop: "0px" }}>{q}) {q_descriptions[q-1]}</h3>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="center"
              >
                {teams.map(team => {
                  let imgStyle = {
                    width: '100%',
                    maxWidth: '300px',
                    height: '167px',
                    objectFit: 'cover', // Crops/centers without distortion
                    display: 'block',
                    backgroundColor: '#f0f0f0', // Gray box placeholder structure if it takes time to load
                    objectPosition: '50% 20%',
                  };
                  if (q === 1 && team === 3) {
                    imgStyle['objectPosition'] =  '50% 53%'
                  } else if (q === 4 && team === 3) {
                    imgStyle['objectPosition'] =  '50% 50%'
                  } else if (q === 8 && team === 2) {
                    imgStyle['objectPosition'] =  '50% 23%'
                  } else if (q === 8 && team === 3) {
                    imgStyle['objectPosition'] =  '50% 23%'
                  } else if (q === 14 && team === 3) {
                    imgStyle['objectPosition'] =  '50% 50%'
                  } else if (q === 15 && team === 3) {
                    imgStyle['objectPosition'] =  '50% 50%'
                  } else if (q === 18 && team === 3) {
                    imgStyle['objectPosition'] =  '50% 90%'
                  } else if (q === 19 && team === 3) {
                    imgStyle['objectPosition'] =  '50% 50%'
                  } else if (q === 20 && team === 2) {
                    imgStyle['objectPosition'] =  '50% 10%'
                  } else if (q === 22 && team === 3) {
                    imgStyle['objectPosition'] =  '50% 57%'
                  } else if (q === 24 && team === 2) {
                    imgStyle['objectPosition'] =  '50% 5%'
                  }
                  return <Grid item xs={12} sm={6} md={3} key={1}>
                        <Paper className={classes.paper}>
                          <h3 style={{ marginTop: "0px" }}>Team {team}</h3>
                          <img 
                            src={`${process.env.PUBLIC_URL}/img/` + formattedData[team-1][q-1][0]} 
                            style={imgStyle}
                            onError={this.handleImageError}
                            alt={`q${q}-team${team}`}
                          />
                          
                          <h3 style={{ marginBottom: "0px" }}>{formattedData[team-1][q-1][1] ? formattedData[team-1][q-1][1] : "No Submission"}</h3>
                        </Paper>
                    </Grid>
                }
                )}
              </Grid>
            </Paper>
          )}

          <br/> <br/>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Home);