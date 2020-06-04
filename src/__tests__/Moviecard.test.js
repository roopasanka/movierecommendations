import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MovieCard } from '../components/Moviecard';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import { moviesByList } from '../Fakedata/fakedata';



function renderWithRouter(ui, {
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
} = {}) {
  return {

    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

const props = {
    movie: moviesByList[1]
}
describe('Test full app with fake data', () => {
  test('Check whether movie card is rendered', () => {
    const { getByTestId } = renderWithRouter(<MovieCard {...props}/>);

    const contentNoticeElement = getByTestId('moviecard');

    expect(contentNoticeElement).toBeInTheDocument();
  });
  test('Check whether movie post is rendered', () => {
    const { getByTestId } = renderWithRouter(<MovieCard {...props}/>);

    const imageElement = getByTestId('Image');

    expect(imageElement).toBeInTheDocument();
  });

});
