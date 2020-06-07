import axios from "axios";
import { put, takeLatest, delay } from "redux-saga/effects";

export function* incrementSaga(action: any) {
  console.log(action);
  // delay is same as setTimeout but more relevant with respect to saga
  yield delay(2000);
  yield localStorage.setItem("email", "a@b.com");

  // put is same as dispatch
  yield put({ type: "inc" });

  // Error handling the component
  try {
    const { data } = yield axios.get(
      "https://jsonplaceholder.typicodes.com/todos/1"
    );
    console.log(data);

    yield put({ type: "user", payload: data });
  } catch (err) {
    console.log(err);
    yield put({ type: "userError", payload: "Can't fetch user from API. " });
  }
}

export function* executeAll() {
  yield takeLatest("iniInc", incrementSaga);
}
