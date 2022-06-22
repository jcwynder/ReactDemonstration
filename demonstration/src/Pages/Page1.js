const Page1 = () => {
  return (
    <>
      <h1>React Introduction</h1>
      <h2>What is React?</h2>
      <p>
        React is a JavaScript library for building user interfaces and is used
        to build single-page applications.
      </p>
      <p>React allows us to create reusable UI components.</p>
      <h2>How Does React Work?</h2>
      <ul>
        <li>React creates a VIRTUAL DOM in memory.</li>
      </ul>
      <p>
        Instead of manipulating the browser's DOM directly, React creates a
        virtual DOM in memory, where it does all the necessary manipulating,
        before making the changes in the browser DOM.
      </p>
      <ul>
        <li>React only changes what needs to be changed!</li>
      </ul>
      <p>
        React finds out what changes have been made, and changes only what needs
        to be changed.
      </p>
    </>
  );
};

export default Page1;
