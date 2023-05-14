import MarkdownIt from "markdown-it";

function styleHtml(html: string) {
  const commonHeadingStyle =
    "font-semibold hover:text-blue-700 hover:underline hover:underline-offset-2 capitalize transition-colors duration-100 ease-in-out cursor-default";
  return html
    .replaceAll("<p>", `<p class="text-sm md:text-lg">`)
    .replaceAll("<h1>", `<h1 class="${commonHeadingStyle} text-4xl md:text-6xl ">`)
    .replaceAll("<h2>", `<h2 class="${commonHeadingStyle} text-3xl md:text-5xl ">`)
    .replaceAll("<h3>", `<h3 class="${commonHeadingStyle} text-2xl md:text-4xl ">`)
    .replaceAll("<h4>", `<h4 class="${commonHeadingStyle} text-xl md:text-3xl ">`)
    .replaceAll("<h5>", `<h5 class="${commonHeadingStyle} text-lg md:text-2xl ">`)
    .replaceAll("<h6>", `<h6 class="${commonHeadingStyle} text-base md:text-xl ">`)
    .replaceAll(
      "<code>",
      `<code class="font-mono bg-gray-100 dark:bg-gray-800 border border-gray-200 rounded-md py-1 px-2 font-normal">`
    )
    .replaceAll(
      "<pre>",
      '<pre class="bg-gray-50 dark:bg-gray-800 p-2 rounded-md border-2 border-gray-200">'
    );
}

export function renderMarkdown(markdown: string): string {
  const md = new MarkdownIt();
  const html = md.render(markdown);
  const styledHtml = styleHtml(html);
  return styledHtml;
}
