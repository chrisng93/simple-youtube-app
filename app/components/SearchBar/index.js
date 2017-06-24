import React, { Component, PropTypes as T } from 'react';

const propTypes = {
  searchVideos: T.func,
};

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.onType = this.onType.bind(this);
  }

  onType(query) {
    const { searchVideos } = this.props;
    // TODO: do something here for API call, debounce
    this.setState({ query });
    searchVideos({ query });
  }

  render() {
    const { query } = this.state;
    return (
      <div className="search-bar">
        <input value={query} placeholder="Search..." onChange={e => this.onType(e.target.value)} />
      </div>
    );
  }
}

SearchBar.propTypes = propTypes;
