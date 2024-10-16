import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

const NewsletterSignup = () => {
  
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if(state === 'idle' && data && data.message) {
      window.alert(data.message + 'Sign Up Succesful!')
    }
  }, [data, state]);

    return (
        <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
          <div className={classes.formDiv}>
            <input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
            <button>Sign up</button>
          </div>
        </fetcher.Form>
      );
}

export default NewsletterSignup;