import React from 'react';


class SongFilter extends React.Component {
    handleChange(event) {
      this.props.updateSearch(event.target.value);
    }
  
    render() {
      return (
        <input
          type="text"
          placeholder="Search a song..."
          className="input-search"
          onChange={this.handleChange.bind(this)}
          value={this.props.searchText}
        />
      );
    }
  }

  export default SongFilter;