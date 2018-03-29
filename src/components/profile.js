import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from './layout';
import './app.css';

const GET_VIEWER = gql`
  {
    viewer {
      name
    }
  }
`;

const Profile= () => (
  <Layout>
    <Query query={GET_VIEWER}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>

        const { viewer } = data;
        return (
            <div>
              <h4>Simple GraphQL Query</h4>
              <div className="intro">
                  Viewer name: { viewer.name }
              </div>
            </div>
        );
      }}
    </Query>
  </Layout>
);

export default Profile;