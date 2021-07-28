import { put, takeEvery, all } from 'redux-saga/effects';

import {
  changeList,
} from "../state/gearOptimizerSlice";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* helloSaga() {
  console.log('Hello Sagas!');
}

function* runCalc() {
  let list = [];
  const core = optimizerCoreCalculate();

  while (true) {

    const result = core.next();
    console.log('result:', result);
    if (result.done) {
      // cleanup
      break;
    }

    if (result.value.modified) {
      list = result.value.list.slice();
      console.log('changed; saga list length:', list.length);
      yield put(changeList(list));
    } else {
      console.log('not changed!');
      yield put({ type: 'DONOTHING' });
    }

    yield delay(10);
  }
}

function* watchIncrementAsync() {
  yield takeEvery('START', runCalc);
}

function* optimizerCoreCalculate() {
  const list = [];
  let modified = false;
  for (let i = 0; i < 10; i++) {
    modified = false;
    if (Math.random() > 0.2) {
      list.push({
        id: i,
        value: ['hi', i, 2*i, 3*i, 4*i]
      },);
      modified = true;

    }
    yield { list, modified, i };
  }

}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ]);
}
