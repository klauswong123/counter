import handleCounter from "./handleCounter";
import { createStore } from 'redux';

export default createStore(
    handleCounter,
)