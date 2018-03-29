import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import withRoot from '../components/withRoot';
import Layout from '../components/layout';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});


const GET_VIEWER = gql`
  {
    viewer {
      name
    }
  }
`;

const Profile= () => {
  // const { classes } = this.props;

  return (
    <Layout>
      <Query query={GET_VIEWER}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>

          const { viewer } = data;
          return (
              <div>
                <Typography variant="display1" gutterBottom>
                  Simple GraphQL Query
                </Typography>
                <div className="intro">
                    Viewer name: { viewer.name }
                </div>
              </div>
          );
        }}
      </Query>
    </Layout>
  )
}

export default withRoot(withStyles(styles)(Profile));