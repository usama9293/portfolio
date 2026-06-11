import { Helmet } from "react-helmet-async";
import { personalInfo } from "../data/portfolioData";

export default function SEO() {
  return (
    <Helmet>
      <title>Usama Arshad — Full Stack Developer | .NET | Node.js | React</title>
      <meta
        name="description"
        content="Usama Arshad is a Full Stack Software Engineer from Rawalpindi, Pakistan with 1.5+ years experience in ASP.NET Core, Node.js, React.js and SQL Server."
      />
      <meta
        name="keywords"
        content="Usama Arshad, Software Engineer Pakistan, .NET Developer Rawalpindi, Full Stack Developer Islamabad, React Developer Pakistan, Node.js Developer"
      />
      <meta property="og:title" content="Usama Arshad — Full Stack Developer" />
      <meta
        property="og:description"
        content="Software Engineer with 1.5+ years experience in .NET, Node.js and React.js"
      />
      <meta property="og:image" content="/og-image.svg" />
      <meta property="og:url" content={personalInfo.siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Usama Arshad — Full Stack Developer" />
      <meta
        name="twitter:description"
        content="Software Engineer with 1.5+ years experience in .NET, Node.js and React.js"
      />
      <meta name="twitter:image" content="/og-image.svg" />
      <link rel="canonical" href={personalInfo.siteUrl} />
    </Helmet>
  );
}
