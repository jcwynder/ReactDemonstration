const Page4 = () => {
  return (
    <>
      <h1>Lifecycle of Components</h1>
      <p>
        Each component in React has a lifecycle which you can monitor and
        manipulate during its three main phases.
      </p>
      <p>The three phases are: Mounting, Updating, and Unmounting.</p>
      <ul>
        <li>Mounting</li>
      </ul>
      <p>Mounting means putting elements into the DOM.</p>
      <p>
        React has four built-in methods that gets called, in this order, when
        mounting a component:
      </p>
      <ol>
        <li>
          <code style={{ color: "red" }}>constructor()</code> - is called before
          anything else, when the component is initiated, and it is the natural
          place to set up the initial state and other initial values.
        </li>
        <li>
          <code style={{ color: "red" }}>getDerivedStateFromProps()</code> - is
          called right before rendering the element(s) in the DOM.
        </li>
        <li>
          <code style={{ color: "red" }}>render()</code> - is required, and is
          the method that actually outputs the HTML to the DOM.
        </li>
        <li>
          <code style={{ color: "red" }}>componentDidMount()</code> - is called
          after the component is rendered is where you run statements that
          require that the component is already placed in the DOM.
        </li>
      </ol>
      <ul>
        <li>Updating</li>
      </ul>
      <p>
        A component is updated whenever there is a change in the component's{" "}
        <code style={{ color: "red" }}>state</code> or{" "}
        <code style={{ color: "red" }}>props</code>.
      </p>
      <p>
        React has five built-in methods that gets called, in this order, when a
        component is updated:
      </p>
      <ol>
        <li>
          <code style={{ color: "red" }}>getDerivedStateFromProps()</code> - is
          the first method that is called when a component gets updated. This is
          still the natural place to set the state object based on the initial
          props.
        </li>
        <li>
          <code style={{ color: "red" }}>shouldComponentUpdate()</code> - is a
          method you can return a Boolean value that specifies whether React
          should continue with the rendering or not. The default value is{" "}
          <code style={{ color: "red" }}>true</code>.
        </li>
        <li>
          <code style={{ color: "red" }}>render()</code> - is called when a
          component gets updated, it has to re-render the HTML to the DOM, with
          the new changes.
        </li>
        <li>
          <code style={{ color: "red" }}>getSnapshotBeforeUpdate()</code> -
          gives you access to the <code style={{ color: "red" }}>state</code>{" "}
          and <code style={{ color: "red" }}>props</code> before the update,
          meaning that even after the update, you can check what the values were
          before the update. If the{" "}
          <code style={{ color: "red" }}>getSnapshotBeforeUpdate()</code> method
          is present, you should also include the{" "}
          <code style={{ color: "red" }}>componentDidUpdate()</code> method,
          otherwise you will get an error.
        </li>
        <li>
          <code style={{ color: "red" }}>componentDidUpdate()</code> - is called
          after the component is updated in the DOM.
        </li>
      </ol>
      <ul>
        <li>Unmounting</li>
      </ul>
      <p>
        The next phase in the lifecycle is when a component is removed from the
        DOM, or unmounting as React likes to call it.
      </p>
      <p>
        React has only one built-in method that gets called when a component is
        unmounted:
      </p>
      <ol>
        <li>
          <code style={{ color: "red" }}>componentWillUnmount()</code> - is
          called when the component is about to be removed from the DOM.
        </li>
      </ol>
    </>
  );
};

export default Page4;
