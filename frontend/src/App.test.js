import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre principal', () => {
  render(<App />);
  const title = screen.getByText(/Mon Projet CI/i);
  expect(title).toBeInTheDocument();
});

test('affiche le texte frontend react', () => {
  render(<App />);
  const subtitle = screen.getByText(/Frontend React \+ Backend Node\.js/i);
  expect(subtitle).toBeInTheDocument();
});
