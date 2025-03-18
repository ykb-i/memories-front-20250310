import { Feeling, Weather } from "src/types/aliases";
import { ResponseDto } from "src/apis/dto/response";

// interface: get diary response body DTO //
export default interface GetDiaryResponseDto extends ResponseDto{
    writeDate: string;
    weather: Weather;
    feeling: Feeling;
    title: string;
    content: string;
    writerId: string;
}