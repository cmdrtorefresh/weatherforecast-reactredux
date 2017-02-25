import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onChange = this.onInputChange.bind(this);
    this.onSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    //Fetch weather data
    
  }

  render() {
    return (
      <form
        onSubmit ={this.onSubmit}
        className="input-group">
        <input
          placeholder="Get a 5 days forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
