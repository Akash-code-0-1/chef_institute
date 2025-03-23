import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layout/Main.jsx", [
    index("./routes/home.tsx"), // Home Page
    route("about", "./routes/about.tsx"), // About Page
    route("programs", "./routes/programs.jsx"), // Program Page
    route("faculty", "./routes/faculty.jsx"), // Our Faculty Page
    route("blogs", "./routes/blogs.jsx"), // Blogs Page
    route("contact", "./routes/contact.tsx"), // Contact Page
    route("verify-certificate", "./routes/verifyCertificate.tsx"), // Verify Certificate Page
  ]),
] satisfies RouteConfig;

