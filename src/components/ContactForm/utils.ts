import isEmail from 'validator/lib/isEmail';
import { SENT_STATUS_SEARCH_PARAMETER } from './consts';

type ErrorsType = { name: string; email: string; message: string };

export function validateContactForm(data: FormData) {
  const name = data.get('name')?.toString().trim() || '';
  const email = data.get('email')?.toString().trim() || '';
  const message = data.get('message')?.toString().trim() || '';
  let errors: ErrorsType = { name: '', email: '', message: '' };
  let isValid = true;

  if (!name || name.length < 2) {
    errors.name = 'Name has to be minimum 2 characters long.';
  }

  if (!email || !isEmail(email)) {
    errors.email = 'Email has to be in valid format.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Message has to be minimum 10 characters long.';
  }

  for (const key of Object.keys(errors) as Array<keyof typeof errors>) {
    if (errors[key]?.length) {
      isValid = false;
      break;
    }
  }

  return { errors: errors, values: { name, email, message }, isValid };
}

export function generateRedirectUrl(url: string, isSuccessful: boolean) {
  const redirectUrl = new URL(url);

  redirectUrl.searchParams.set(SENT_STATUS_SEARCH_PARAMETER, isSuccessful ? '1' : '0');

  return redirectUrl.toString();
}
