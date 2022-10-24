import React from 'react';
import data from '../../data/courses.json';
import Grid from './Grid';
import { render, screen } from '@testing-library/react';
const numberItems = data.length;

describe('Grid component', () => {
  it('should render 12 items', () => {
    render(<Grid items={data} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(numberItems);
  });

  it('should render title of first item', async () => {
    render(<Grid items={data} />);
    const title = await screen.findAllByAltText(data[0].title);
    expect(title.length).toBeGreaterThan(0);
  });
});
