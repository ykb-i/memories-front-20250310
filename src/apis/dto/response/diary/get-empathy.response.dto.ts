import ResponseDto from "../response.dto";

// interface: get empathy response body dto //
export default interface GetEmpathyResponseDto extends ResponseDto {
  empathies: string[];
}