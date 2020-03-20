import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

const Spinner = () => (
  <Dimmer active>
    <Loader>Loading</Loader>
  </Dimmer>
);

export default Spinner;
