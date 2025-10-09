import { legacy_createStore as createStore} from 'redux'
import reducer from "./reducer";


const storeRef = createStore(reducer);


export default storeRef;