import React from 'react';
import data from '../../data/courses.json'
import Grid from './Grid';
import {
    render,
    screen,
  } from '@testing-library/react';
const numberItems = data.length;

    it('should render 12 items', () => {
        render(<Grid items={data} />);
        const items = screen.getAllByRole('listitem');
        expect(items).toHaveLength(numberItems);
        
    });


