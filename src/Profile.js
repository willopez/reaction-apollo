import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './Profile.css';


const QUERY = gql`
   query viewer {
     viewer {
       name
     }
   }
`;

function Profile(props) {
  const { data } = props;
  return (
    <div className="Profile">
      <div className="Profile-header">
        <h2>Welcome Reaction with Apollo!</h2>
      </div>
      <div className="Profile-intro">
        {data.loading === true ? (
          <div>'Loading Data...</div>
        ) : (
          <div>
            Viewer name: { data.viewer.name }
          </div>
        )}
      </div>
    </div>
  );
}

export default graphql(QUERY)(Profile);
