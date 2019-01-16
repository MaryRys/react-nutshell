import PropTypes from 'prop-types';

const messageShape = PropTypes.shape({
  isEdited: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
});

export default messageShape;
