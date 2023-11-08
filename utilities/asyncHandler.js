// Middleware function for handling asynchronous operations
const asyncHandler = (fn) => (req, res, next) => {
  // Wrap the asynchronous function in a Promise and catch any errors
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Export the asyncHandler for use in route handlers
module.exports = asyncHandler;
