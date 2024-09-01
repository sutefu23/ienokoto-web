export function convertPToBr(html: string): string {
  // 空の<p>タグ（&nbsp;を含む）を改行に置き換え
  html = html.replace(/<p>\s*(&nbsp;)?\s*<\/p>/g, "<br>");
  html = html.replace(/<p>(.*?)<\/p>/g, "$1<br>");
  html = html.replace(/<br>$/, "");

  return html;
}
