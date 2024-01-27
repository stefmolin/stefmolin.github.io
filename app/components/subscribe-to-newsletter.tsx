/* adapted from https://pragmaticpineapple.com/add-newsletter-subscription-form-to-react-website/ */
import {
  faCircle,
  faEnvelope,
  faEnvelopeOpen,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const SubscribeToNewsletterForm = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const FORM_URL = 'https://app.convertkit.com/forms/6101302/subscriptions'; // dark form template

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      });

      setEmail('');
      const json = await response.json();

      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
    } catch (err) {
      setStatus('ERROR');
      console.log(err);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('email changed', event.target);
    const { value } = event.target;
    setEmail(value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const inputStyle =
    'form-input border border-gray-900 py-1 px-4 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none';

  return (
    <div className="flex flex-col my-2 grow">
      {status === 'SUCCESS' && (
        <>
          <p>Welcome aboard{name ? `, ${name}` : ''}!</p>
          <p>Please check your inbox to confirm the subscription.</p>
        </>
      )}
      {status === 'ERROR' && (
        <>
          <p>Oops, something went wrong...</p>
          <p>
            Please, <button onClick={() => setStatus(null)}>try again.</button>
          </p>
        </>
      )}
      {status === null && (
        <form className="text-left" onSubmit={handleSubmit} action={FORM_URL}>
          <div className="text-xl font-bold text-left">
            {/* <span className="fa-stack fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} size="2xl" fixedWidth /> */}
            {/* <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              fixedWidth
              // className="fa-inverse"
            /> */}
            {/* </span> */}
            Subscribe to my newsletter
          </div>
          <div className="mt-5 flex flex-row justify-left">
            {/* <label className="relative text-gray-400 focus-within:text-gray-600 block">
              <input
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
                onChange={handleNameChange}
                value={name}
                className={inputStyle}
              />
            </label> */}
            <div className="grow">
              <label className="relative text-gray-400 focus-within:text-gray-600 block">
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg> */}
                <div className="inline-flex items-center w-full pr-2">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute ml-4 my-auto" size="xl" />

                  <input
                    required
                    type="email"
                    name="email_address"
                    id="email"
                    aria-label="Your email address"
                    placeholder="email@example.com"
                    onChange={handleEmailChange}
                    value={email}
                    className={inputStyle}
                  />
                </div>
              </label>
            </div>

            <button className="px-2 py-1 bg-slate-400 hover:bg-slate-500" type="submit">
              Subscribe
            </button>
          </div>
          {/* <div className="shrink my-2">
            <button
              className="px-2 py-1 rounded bg-slate-400 hover:bg-slate-500"
              type="submit">
              Subscribe
            </button>
          </div> */}
          <small className="text-slate-500">I respect your privacy. Unsubscribe at any time.</small>
        </form>
      )}
    </div>
  );
};

export default SubscribeToNewsletterForm;
