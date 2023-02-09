import "./output.css";
import { Menu } from '../components/Menu';

interface RootLayout {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayout) {
    return (
      <html lang="en">
        <head />
        <body>
          <Menu></Menu>
          {children}
        </body>
      </html>
    );
  }