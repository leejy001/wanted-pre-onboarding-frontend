export interface ButtonType {
  type: "button" | "submit";
  className: string;
  name: string;
  fontSize: number;
  width: number;
  height: number;
  onClick?: () => void;
}
