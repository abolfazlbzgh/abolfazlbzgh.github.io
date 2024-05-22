import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Toast = ({ message, visible, type }) => {
  return (
    <div
      className={classNames(
        'fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full shadow-lg transition-all duration-300',
        {
          'opacity-0': !visible,
          'opacity-100': visible,
          'bg-green-500': type === 'success',
          'bg-red-500': type === 'error',
          'bg-blue-500': type === 'info',
        }
      )}
    >
      <p className="text-white text-center">{message}</p>
    </div>
  );
};

// Toast.propTypes = {
//   message: PropTypes.string.isRequired,
//   visible: PropTypes.bool.isRequired,
//   type: PropTypes.oneOf(['success', 'error', 'info']),
// };

// Toast.defaultProps = {
//   type: 'info',
// };

export default Toast;
