import AuthPage from "./auth-page.alias";
import JoinType from "./join-type.alias";
import Weather from "./weather-type.alias";
import Feeling from "./feeling-type.alias";
import DiaryNumber from "./diaryNumber-type";
// export type으로 여러개를 한번에 보냄
// interface나 type은 구현체가 없기 때문에 사용가능함.
export type {
    AuthPage,
    JoinType,
    Weather,
    Feeling,
    DiaryNumber
}