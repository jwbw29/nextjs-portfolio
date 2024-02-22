//primary button
export const PrimaryButton = ({ children }) => {
  return (
    <button className=" min-h-14 min-w-32 py-4 px-6 text-2xl text-dark bg-white rounded-full focus:shadow-outline focus:ring-1 focus:ring-white hover:shadow-md hover:shadow-blue1">
      {children}
    </button>
  );
};

//secondary button
export const SecondaryButton = ({ children }) => {
  return (
    <button className=" min-h-14 min-w-32 py-4 px-6 text-2xl text-white bg-none border border-solid border-white rounded-full focus:shadow-outline focus:ring-1 focus:ring-white hover:shadow-md hover:shadow-blue1">
      {children}
    </button>
  );
};

//Contact ME button
export const ContactButton = ({ children }) => {
  return (
    <button className=" min-h-14 min-w-44 py-4 px-6 text-2xl text-white bg-none border border-solid border-white rounded-full focus:shadow-outline focus:ring-1 focus:ring-white  hover:shadow-md hover:shadow-blue1">
      {children}
    </button>
  );
};
