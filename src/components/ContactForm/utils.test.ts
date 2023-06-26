import { describe, it, expect } from 'vitest';
import { validateContactForm } from './utils';

const validValues = {
  name: 'John Doe',
  email: 'johndoe@email.com',
  message: "Hi!\nI'm interested in your services! \nRegards, John",
};

describe('validateContactForm', () => {
  it('should output valid results', () => {
    const formData = new FormData();

    formData.set('name', validValues.name);
    formData.set('email', validValues.email);
    formData.set('message', validValues.message);

    expect(validateContactForm(formData)).toEqual({
      isValid: true,
      errors: { name: '', email: '', message: '' },
      values: validValues,
    });
  });

  it.each([
    {
      name: '',
      email: 'johndoeemail.com',
      message: 'Hi!',
    },
    {
      name: 'J',
      email: '',
      message: '',
    },
  ])('should output invalid results when fields are missing', ({ name, email, message }) => {
    const formData = new FormData();

    formData.set('name', name);
    formData.set('email', email);
    formData.set('message', message);

    expect(validateContactForm(formData)).toEqual({
      isValid: false,
      errors: {
        name: 'Name has to be minimum 2 characters long.',
        email: 'Email has to be in valid format.',
        message: 'Message has to be minimum 10 characters long.',
      },
      values: { name, email, message },
    });
  });

  it('should cast to string and trim passed values', () => {
    const formData = new FormData();

    formData.set('name', new Blob(), 'test');
    formData.set('email', `  ${validValues.email}  `);
    formData.set('message', `  ${validValues.message}  `);

    expect(validateContactForm(formData)).toEqual({
      isValid: true,
      errors: { name: '', email: '', message: '' },
      values: {
        ...validValues,
        name: '[object File]',
      },
    });
  });
});
