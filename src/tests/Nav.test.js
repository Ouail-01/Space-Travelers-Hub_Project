import React from 'react';
import Renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Nav from '../components/Nav';

describe('Nav', () => {
  test('renders correctly', () => {
    const tree = Renderer
      .create(
        <Router>
          <Nav />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct Rockets page', () => {
    const { getByText } = render(
      <Router>
        <Nav />
      </Router>,
    );
    const rocketsLink = getByText(/Rockets/i);
    fireEvent.click(rocketsLink);
    expect(window.location.pathname).toBe('/');
  });

  test('renders the correct Missions page', () => {
    const { getByText } = render(
      <Router>
        <Nav />
      </Router>,
    );
    const missionsLink = getByText(/Missions/i);
    fireEvent.click(missionsLink);
    expect(window.location.pathname).toBe('/Missions');
  });
});
