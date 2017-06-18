import AppDispatcher from '../dispatcher/AppDispatcher';
import AirportActions from '../actions/AirportActions';
import constants from '../constants';
import { ReduceStore } from 'flux/utils';

class TicketStore {
  getInitialState() {
    return []
  }

  reduce(state, action) {
    switch(action.type) {
      case constants.FETCH_TICKETS
        return [];
      case constants.FETCH_TICKETS_SUCCESS:
        return action.response;
      default:
        return state;
    }
  }
}

export default new TicketStore(AppDispatcher);