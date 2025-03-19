import { Feeling, Weather } from "../aliases";

export default interface Diary{
    diaryNumber: number;
    writeDate: string;
    title: string;
    weather: Weather;
    feeling: Feeling;
}