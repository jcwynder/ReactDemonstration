import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
class Page5 extends Component {
  render() {
    return (
      <>
        <p>
          View is the most common as well as the core element in React Native.
          You can consider it as an equivalent of the div element used in web
          development, which defines a division or a section in a document.
        </p>
        <h2>Use Cases</h2>
        <p>Below are some common use cases of view.</p>
        <ul>
          <li>
            When you need to wrap your elements inside the container, you can
            use View as a container element.
          </li>
          <li>
            When you want to nest more elements inside the parent element, both
            parent and child can be View. It can have as many children as you
            want.
          </li>
          <li>
            When you want to style different elements, you can place them inside
            View since it supports style property, flexbox etc.
          </li>
          <li>
            View also supports synthetic touch events, which can be useful for
            different purposes.
          </li>
        </ul>
        <h3>Example: Displaying Text/TextInput/Button Inside View</h3>
        <p>
          This example creates a View component that has three view Components
          each with Text, TextInput and a Button.
        </p>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View>
            <Text style={{ color: "blue", fontSize: 30 }}>
              {" "}
              View Component{" "}
            </Text>
          </View>
          <View>
            <TextInput
              style={{ height: 40, borderColor: "black", borderWidth: 1 }}
              defaultValue="Type something here"
            />
          </View>
          <View>
            <Button title="Click Me" color="red" />
          </View>
        </View>
      </>
    );
  }
}
export default Page5;
