const Page2 = () => {
  return (
    <>
      <h2>DOM vs Virtual DOM</h2>
      <p>
        The Document Object Model (DOM) represents the web document page so that
        programs can change the document structure, style, and content.
      </p>
      <p>
        Virtual DOM is a representation of a DOM object, like a lightweight
        copy. A virtual DOM object has the same properties as a real DOM object,
        but it lacks the real thing's power to directly change what's on the
        screen.
      </p>
    </>
  );
};

export default Page2;
