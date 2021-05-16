import { error, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Angeler.css';

const settings = {
  maxTextHeight: null,
  mouseReset: false,
  sticker: false,
  width: '300px',
  styling: 'angeler',
  icons: 'angeler',
  mode: 'dark',
  addClass: 'angeler-extended',
};

export const errorFromServerById = () =>
  error({
    text: "Sorry, we can't show you information about this event. Try again later.",
    delay: 3000,
    ...settings,
  });

export const errorFromServer = () =>
  error({
    text: 'Something went wrong on a server. Try to repeat the request later.',
    delay: 3000,
    ...settings,
  });

export const emptyEvents = () =>
  notice({
    title: 'No such events!',
    text: "Maybe, someday we'll have it :(",
    delay: 4000,
    ...settings,
  });

export const successfullRequest = () =>
  notice({
    title: 'Success!',
    text: "Look at the events, that we've just found for you :)",
    delay: 2000,
    icon: false,
    ...settings,
  });
