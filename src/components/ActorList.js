import React from "react";
import { Grid, Card } from "semantic-ui-react";

const ActorList = (props) => {
  return (
    <>
      <Grid stackable columns={3}>
        {props.actors.map((actor, index) => (
          <Grid.Column key={index}>
            <Card>
              <Card
                header={actor.name}
                description={actor.description}
                image={actor.photo}
              />
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default ActorList;
