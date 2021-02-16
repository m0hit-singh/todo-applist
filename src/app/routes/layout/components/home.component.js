import React from "react";

import Header from "./header.component";
import Footer from "./footer.component";
import TODOListComponent from "../../to-do/components/todo-list.component";

function HomeComponent() {
  return (
    <div className="App">
      <Header />
      <TODOListComponent />
      <Footer />
    </div>
  );
}

export default HomeComponent;
