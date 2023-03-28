import Head from 'next/head';

import { useForm } from 'react-hook-form';

export default function Sheet() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, // catch error messages
  } = useForm();

  function submitHandler (data) {
    console.log(data)
    fetch('/api/sheetApi', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data)
    reset(); // clears the input on submitting
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1>
          Your response matters
        </h1>

        <form onSubmit={handleSubmit(submitHandler)}>
          <input type="text"
            placeholder="Enter Name"
            {...register('Name', { required: 'Please enter your name' })}
          />
          {errors.Name && errors.Name.message}
          <input type="text"
            placeholder="Enter Message"
            {...register('Feedback', { required: 'Enter your feedback!' })}
          />
          {errors.Feedback && errors.Feedback.message}
          <button
            type="submit"
            variant="ghost"
          >
            Submit Form fggg
          </button>
        </form>
      </main>
    </div>
  );
}