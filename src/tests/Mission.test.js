import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Missions from '../components/Mission';

const mission = renderer.create(
  <Provider store={store}>
    <Missions />
  </Provider>,
);

describe('Mission component test', () => {
  it('Check if the missions section are available', () => {
    expect(mission).toMatchSnapshot();
  });
});
