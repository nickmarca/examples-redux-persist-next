import React, {Component} from "react";
import Head from "next/head";
import DataShow from "../components/DataShow";
import DataForm from "../components/DataForm";
import withRedux from "next-redux-wrapper";
import initStore from "../store";

class HomePage extends Component {
  render() {
    return(
      <div>
        <Head>
          <link rel="stylesheet" href="/static/styles/styles.css"></link>
        </Head>
        <div className="App">
          <h1>Hi, this is an example to demonstrate using redux-persist with nextjs</h1>
          <p>1) NextJS will first send to client a pure HTML page containing the rendered components on state of loading.
            <br />2) NextJs will then send JS codes containing React, Redux, etc, so that application can become dynamic.
            <br />3) After that redux-persist will start its job and load persisted state.
            <br />4) When it's done, it'll dispatch a Redux action notifying React Components, which is going to update itself with the newsest persisted and now loaded state.
            <br/>Note: I delayed the redux-persist load intentionally.
          </p>
          <DataShow />
          <DataForm />
          <h4>by @nickmarca</h4>
        </div>
      </div>
    )
  }
}

export default withRedux(initStore, null, null)(HomePage);
