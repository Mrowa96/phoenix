import { getEnv } from './helpers/getEnv';

export const parameters = {
  socials: {
    githubUrl: 'https://github.com/Mrowa96',
    linkedinUrl: 'https://linkedin.com/in/pawel-mrowiec',
    twitterUrl: 'https://twitter.com/Mrowa94',
  },
  personalInfo: {
    name: 'Paweł Mrowiec',
    mailAddress: getEnv('PUBLIC_MAIL_ADDRESS'),
  },
};
