import { ResponseDto } from "src/apis/dto/response";
import { Feeling, Weather } from "src/types/aliases";

// interface: patch diary response body DTO //
export default interface PatchDiaryResponseDto extends ResponseDto{
    weather: Weather;
    feeling: Feeling;
    title: string;
    content: string;
    writerId: string;
}