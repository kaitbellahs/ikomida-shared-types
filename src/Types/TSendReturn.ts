type TSendReturn =
  | {
      code: number;
      id: string | undefined;
    }
  | {
      code: number;
      id?: undefined;
    }
  | undefined;
export default TSendReturn;
