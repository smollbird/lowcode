export interface IHeader {
  host: string;
  time: number;
  timeUnit: string;
  timeUnits: IUnit[];
}
export interface IUnit {
  label: string;
  value: string;
}

export interface IRequestPart {
  requestAddress: string;
  requestMethod: string;
  methods: string[];
}
