import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Montserrat, Roboto } from "@next/font/google";
import { configStyleComponent } from "@/common/constant";
import NextTopLoader from "nextjs-toploader";
import "@/styles/custom.scss";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  variable: "--montserrat",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  variable: "--roboto",
});

export const metadata = {
  title: {
    template: "%s | Ống thép Phú Vinh",
    default: "Ong thep phu vinh",
  },
  description: "Được tạo bởi ống thép Phú Vinh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} antialiased`}>
        <ConfigProvider theme={{ components: configStyleComponent }}>
          <AntdRegistry>
            <NextTopLoader
              showSpinner={false}
            />
            {children}
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
