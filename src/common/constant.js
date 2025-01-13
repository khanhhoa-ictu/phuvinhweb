export const listMenu = [
  {
    title: "Giới thiệu",
    href: "/about",
    baseURL:"/about"
  },
  {
    title: "Sản phẩm",
    href: "/product",
    baseURL:"/product?page=1&category=1"

  },
  {
    title: "Bài viết",
    href: "/post",
    baseURL:"/post?page=1"

  },
  {
    title: "Liên hệ",
    href: "/contact",
    baseURL:"/contact"

  },
];

export const configStyleComponent = {
  Button: {
    primaryColor: "#261797",
    contentFontSize: 16,
    controlHeight: 44,
    primaryShadow: "none",
    defaultColor: "#fff",
    defaultBg: "#261797",
    defaultHoverBg: "#261797",
    defaultHoverColor: "#fff",
    defaultActiveBg: "#261797",
    defaultActiveColor: "#fff",
    fontWeight: 600,
    paddingInline: 16,
    paddingBlock: 0,
    defaultHoverBorderColor:"none"
  },
  Input: {
    algorithm: true, // Enable algorithmrderColor: '#50c297',
    paddingBlock: 7,
    hoverBorderColor: "#DCE0E4",
    colorPrimaryActive: "#DCE0E4",
    colorPrimary: "#DCE0E4",
    activeShadow: "none",
  },
  Pagination: {
    itemActiveBg: "rgba(91, 90, 247, 0.18)",
    itemBg: "none",
    colorPrimary: "#261797",
    colorPrimaryHover: "#261797",
    borderRadius: "50%",
    lineType: "none",
    colorText: "#4B4B4B",
    fontSize: 16,
  },
  Form: {
    itemMarginBottom: 32,
  },
};
