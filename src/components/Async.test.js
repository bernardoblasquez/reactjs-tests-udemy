import { render, screen } from '@testing-library/react'
import Async from './Async'


describe('Async component', () => {
    test('renders post', async () => {
        window.fetch = jest.fn(); //creates a mock function - overwriting the original fetch function
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id:'p1', title: 'First post'}]
        })

        render(<Async/>)
        
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);

    });
});

// use mocks have many advantages:
//  - we set the values the fetch function uses with dummy values
//  - we simulate the success case
//  - we are not sending requests to the API
//  - we are not hammering the API, sending unnecessary requests
//  - avoid potential problems if the server is down