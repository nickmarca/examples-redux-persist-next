import React, { Component } from "react";
import {connect} from "react-redux";
import {saveMyData} from "../actions";
import {bindActionCreators} from "redux";

class DataForm extends Component {
  state = {
    key: '',
    value: ''
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.saveMyData(this.state);
    this.setState({key: '', value: ''});
  };

  renderForm() {
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="key" value={this.state.key} onChange={({target}) => this.setState({key: target.value})}/>
        <input type="text" placeholder="value" value={this.state.value} onChange={({target}) => this.setState({value: target.value})}/>
        <input type="submit" value={"save my data"}/>
      </form>
    );
  }

  render() {
    return(
      <div className="DataForm">
        {this.props.status.loaded ? this.renderForm() : "Loading ...." }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveMyData: bindActionCreators(saveMyData, dispatch)
  }
};

const mapStateToProps = ({status}) => {
  return {
    status
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DataForm);