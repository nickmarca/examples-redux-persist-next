import React, {Component} from "react";
import { connect } from "react-redux";

class DataShow extends Component {

  componentWillReceiveProps(props){
    console.log(props);
  }

  renderDataItem(key, value, i) {
    return(
      <div className="DataItem" key={i}>
        <div className="key"><span>Key:</span> {key} </div>
        <div className="value"><span>Value:</span> {value}</div>
      </div>
    );
  }

  renderLoading() {
    return(
      <p>Please wait 3 seconds, loading data from localforage...</p>
    );
  }

  renderContent() {
    const data = Object.values(this.props.myData);

    return(
      <div>
        {
          data.length ?
            data.map((d, i) => this.renderDataItem(d.key, d.value, i)) :
            "You have no data yet, try to add"
        }
      </div>
    )
  }

  render() {
    return(
      <div className="DataShow">
        <div>
          <div>Your data:</div>
          <br/>
          <br/>
          {!this.props.status.loaded ? this.renderLoading() : this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({myData, status}) => {
  return {
    myData,
    status
  }
};

export default connect(mapStateToProps, null)(DataShow);