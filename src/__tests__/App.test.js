import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from '../components/App';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';



function renderWithRouter(ui, {
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
} = {}) {
  return {

    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}


describe('Test full app with mock data', () => {
  test('full app rendering/navigating with no routes', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const appElement = getByTestId('app');

    expect(appElement).toBeInTheDocument();
  });

});
