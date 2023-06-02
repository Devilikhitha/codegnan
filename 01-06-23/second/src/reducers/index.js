import counter from './counter'
import { combineReducers} from 'redux'

const myReducers= combineReducers({
    counter:counter
})
export default myReducers