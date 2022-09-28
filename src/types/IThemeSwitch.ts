export default interface IThemeSwitch {
  theme: string;
  setTheme: React.Dispatch<string>;
  children?: string;
}
