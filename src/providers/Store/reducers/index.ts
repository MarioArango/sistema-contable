import { combineReducers } from 'redux'
import users from './users'
import sockets from './sockets'
import regionals from './regionals'
import policies from './policies'
import auth from './auth'
import session from './session'
import timezone from './timezone'
import files from './files'

const rootReducer = combineReducers({
  users: users,
  sockets: sockets,
  regionals: regionals,
  policies: policies,
  auth: auth,
  session: session,
  timezone: timezone,
  files: files
})

export default rootReducer
