import { combineReducers } from 'redux';
import { authedReducers } from './authedReducers';
import { prisonsReducers } from './prisonsReducers';
import { prisonersReducers } from './prisonersReducers';
import { loadingReducers } from './loadingReducers';
import { errorReducers } from './errorReducers'

export default combineReducers({
    authedReducers,
    prisonsReducers,
    prisonersReducers,
    loadingReducers,
    errorReducers
});