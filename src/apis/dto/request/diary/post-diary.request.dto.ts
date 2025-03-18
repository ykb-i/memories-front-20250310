// interface: post diary request body DTO //
import { Weather } from "src/types/aliases";
import { Feeling } from "src/types/aliases";

export default interface PostDiaryRequestDto {
  weather: Weather;
  feeling: Feeling;
  title: string;
  content: string;
}