import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './Profile.css';

const GET_VIEWER = gql`
  {
    viewer {
      name
    }
  }
`;

const Profile = () => (
  <Query query={GET_VIEWER}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div className="Profile">
          <div className="Profile-header">
            <h2>Welcome Reaction with Apollo!</h2>
          </div>
          <div className="Profile-intro">
              Viewer name: { data.viewer.name }
            )}
          </div>
        </div>
      );
    }}
  </Query>
);

export default Profile;