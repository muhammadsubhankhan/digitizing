import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: false });

/**
 * Renders post markdown to HTML.
 *
 * The only author is the signed-in site owner, so this is not sanitised —
 * raw HTML in a post is rendered as written, which is deliberate (it allows
 * embeds). If you ever open authoring to other people, add a sanitiser here.
 */
export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false });
}

/** Rough reading time, used as a hint on the post page. */
export function readingTime(markdown: string): number {
  const words = markdown.replace(/[#*_`>[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
