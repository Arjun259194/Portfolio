export function blogStyle(html: string) {
  return html
    .replaceAll("<p>", '<p class="text-lg">')
    .replaceAll("<h1>", '<h1 class="font-semibold capitalize text-6xl">')
    .replaceAll("<h2>", '<h2 class="font-semibold capitalize text-5xl">')
    .replaceAll("<h3>", '<h3 class="font-semibold capitalize text-4xl">')
    .replaceAll("<h4>", '<h4 class="font-semibold capitalize text-3xl">')
    .replaceAll("<h5>", '<h5 class="font-semibold capitalize text-2xl">')
    .replaceAll("<h6>", '<h6 class="font-semibold capitalize text-xl">');
}
