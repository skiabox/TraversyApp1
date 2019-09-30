import React, { useState } from 'react';

import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  //text is the state and setText the function that changes the state
  //inside useState we have the initial value of text
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      // using functions as props we can call a function up to the App.js
      searchUsers(text);

      //clear the form
      //this.setState({ text: '' });
      setText('');
    }
  };

  // we use e.target.name to be able to use this function from other input fields too (ex: input field for email with name='email' input field attribute)
  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
