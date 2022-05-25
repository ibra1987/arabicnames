module.exports = {
  siteUrl: "https://arabicgirlnames.com",
  generateRobotsTxt: true,
  robotTextOptions: {
    policies: [
      { userAgent: "*", disallow: "/administrator" },
      { userAgent: "*", allow: ["/"] },
    ],
  },
  exclude: ["/privacy-policy", "/administrator"],
};
