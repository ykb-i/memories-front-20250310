import { Feeling, Weather } from "src/types/aliases";
import { ResponseDto } from "src/apis/dto/response";

export default interface PatchDiaryRequestDto extends ResponseDto{
    weather: Weather;
    feeling: Feeling;
    title: string;
    content: string;
}