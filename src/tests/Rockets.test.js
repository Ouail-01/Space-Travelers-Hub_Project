import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rocket from '../components/Rockets';

const mockStore = configureMockStore([]);

describe('Rocket', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 'falcon1',
            name: 'Falcon 1',
            description: 'A two-stage rocket designed and manufactured by SpaceX.',
            img: 'https://images.example.com/falcon1.jpg',
            reserved: false,
          },
          {
            id: 'falcon9',
            name: 'Falcon 9',
            description: 'A partially reusable two-stage rocket designed and manufactured by SpaceX.',
            img: 'https://images.example.com/falcon9.jpg',
            reserved: true,
          },
        ],
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <Rocket
          id="falcon1"
          name="Falcon 1"
          description="A two-stage rocket designed and manufactured by SpaceX."
          img="https://images.example.com/falcon1.jpg"
          reserved={false}
        />
      </Provider>,
    );
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
