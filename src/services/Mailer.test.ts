import { describe, it, expect, vi } from 'vitest';
import { createTransport } from 'nodemailer';
import { Mailer } from './Mailer';
import * as config from '../config';

vi.mock('nodemailer');
vi.spyOn(config, 'parameters', 'get').mockReturnValue({
  mailer: {
    host: 'test',
    password: 'test',
    port: 8080,
    receiverMail: 'test',
    user: 'test',
  },
} as typeof config.parameters);

describe('Mailer', () => {
  it('should throw and pass error to parent function', async () => {
    vi.mocked(createTransport).mockImplementation(() => {
      throw new Error('test error');
    });

    await expect(() =>
      new Mailer().sendMail('John', 'test@email.com', 'Buy my services!', 'Hi! Please contact me!'),
    ).rejects.toThrowError('test error');
  });
});
