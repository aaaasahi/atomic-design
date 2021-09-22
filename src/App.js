import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "あさひ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234@example.com",
  phone: "000-1111-222",
  company: {
    name: "テスト株式会社"
  },
  website: "https//google.com"
};

export default function App() {
  return <Router />;
}
