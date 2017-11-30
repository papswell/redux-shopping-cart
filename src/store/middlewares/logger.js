const logger = (store) => next => action => {

  console.log('Action', action, store.getState());

  if (action.type === 'GET_DATA') {
    console.log('preventing action GET_DATA');
    return;
  }

  next(action);
}

export default logger;
