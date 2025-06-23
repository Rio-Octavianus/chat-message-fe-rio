import React from 'react';

export default function App() {
  return (
      <div className="mb-2 xl:w-50">
      <input
          type="search"
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-6 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-300 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 white:placeholder:text-neutral-200 dark:focus:border-secondary"
          id="exampleSearch"
          placeholder="Search Contact" />
  </div>
  );
}