import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from './Greetings';

describe('Greeting component', () => {

    test('render: Greeting header', () => {

        //ARRANGE
        render(<Greetings/>);
    
        //ACT
    
  
        // ASSERT
        const greetingText = screen.getByText(/Olá Putos/i);
        expect(greetingText).toBeInTheDocument();
    });

    test('render: Um texto aleatorio se botão NÂO FOI clicado', ()=> {
        
        render(<Greetings/>);  
        
        const txtALeatorio = screen.getByText(/Um texto aleatorio/i);
        expect(txtALeatorio).toBeInTheDocument()
    });

    test('render: texto MUDOU se o botão FOI clicado', ()=> {
        
        render(<Greetings/>); 
        
        // ACT
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const output = screen.getByText(/Mudado/i);
        expect(output).toBeInTheDocument()
    });

    test('does not render: Um texto aleatorio', ()=> {
        
        render(<Greetings/>); 
        
        // ACT
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputEL = screen.queryByText('Um texto aleatorio', {exact: false});
        expect(outputEL).toBeNull();
    });

});
