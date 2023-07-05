import { getEnv } from './helpers/getEnv';

export const parameters = {
  socials: {
    githubUrl: 'https://github.com/Mrowa96',
    linkedinUrl: 'https://linkedin.com/in/pawel-mrowiec',
    twitterUrl: 'https://twitter.com/Mrowa94',
  },
  // get analyticsId(): string | undefined {
  //   return getEnv('ANALYTICS_ID', { throwOnUndefined: false });
  // },
  personalInfo: {
    name: 'Paweł Mrowiec',
  },
  mailer: {
    get host() {
      return getEnv('MAILER_HOST');
    },
    get port() {
      return getEnv('MAILER_PORT', { asNumber: true });
    },
    get user() {
      return getEnv('MAILER_USER');
    },
    get password() {
      return getEnv('MAILER_PASSWORD');
    },
    get receiverMail() {
      return getEnv('MAILER_RECEIVER_MAIL');
    },
  },
  // sentry: {
  //   get dsn(): string | undefined {
  //     return getEnv('SENTRY_DSN', { throwOnUndefined: false });
  //   },
  // },
};
