export default interface ConcentrationTest {
  sequence: number;
  measurementScore: number;
  errorCount: number;
  testDate: String;
  scoreGap: number | null;
  errorGap: number | null;
}