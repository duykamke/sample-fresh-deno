import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { type PropsWithChildren } from "@elysiajs/html";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import staticPlugin from "@elysiajs/static";

const Base = ({ children }: PropsWithChildren) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zuiverse</title>
    <script src="https://unpkg.com/htmx.org@1.9.3"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
    <script src="https://unpkg.com/htmx.org/dist/ext/preload.js"></script>
    <script>
    htmx.config.globalViewTransitions = true;
    </script>
    <link href="/public/output.css" rel="stylesheet">
</head>
${children}`;

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <Base>
            <body
                hx-boost="true"
                hx-ext="preload"
            >
                <Header />
                <main>
                    <NavBar />
                    {children}
                </main>
            </body>
        </Base>
    )
}

const app = new Elysia()
    .use(staticPlugin())
    .use(html())
    .get("/", () => {
        return (
            <Layout />
        )
    })
    .get("/about", () => {
        return (
            <Layout>
                <a class="px-1 hover:text-yellow-300 ml-12" style={"view-transition-name: box"} href="/about">
                    about me
                </a>
            </Layout>
        )
    })
    .listen(3000);

console.log(
    `Listening at http://${app.server?.hostname}:${app.server?.port}`
);