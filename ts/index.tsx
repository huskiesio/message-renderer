import MarkdownIt from "markdown-it";
import mk from "markdown-it-katex";
import hljs from "highlight.js";
import React, {useRef, useState, useEffect, FunctionComponent} from "react";

const md: MarkdownIt = new MarkdownIt({
  breaks: true,
  linkify: true,
  highlight: (str: string, lang: string): string => {
	if (lang && hljs.getLanguage(lang)) {
		try {
		return `<pre class="hljs"><code class="language-${lang}">${hljs.highlight(lang, str, true).value}</code></pre>`;
		} catch (__) {}
	}

	return ""; // use external default escaping
  }
}).enable([
  "code",
  "fence",
  "list",
  "backticks",
  "strikethrough",
  "emphasis",
  "balance_pairs"
]);

md.use(mk);

interface Preview {
  img: string;
}

interface Props {
  text: string;
  className?: string;
}

const Renderer: FunctionComponent<Props> = ({text, className}: Props): React.ReactElement<{}> => {
  const renderedMarkdownRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [previews, setPreviews]: [Preview[], React.Dispatch<React.SetStateAction<Preview[]>>] = useState<Preview[]>([]);

  useEffect((): void => {
	if (renderedMarkdownRef.current) {
		const links: HTMLCollection = renderedMarkdownRef.current.getElementsByTagName("a");

		const imageURLPattern: RegExp = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/g);

		for (const l of links) {
		const link: HTMLLinkElement = l as HTMLLinkElement;

		if (imageURLPattern.test(link.href)) {
			setPreviews([...previews, {img: link.href}]);
		}
		}
	}
  }, []);

  return (
	<div className={className}>
		<div className="markdown" ref={renderedMarkdownRef} dangerouslySetInnerHTML={{__html: md.render(text)}}></div>

		<div className="previews">
		{
			previews.map((preview: Preview): React.ReactElement<{}> => (<img key={preview.img} src={preview.img}/>))
		}
		</div>
	</div>
  );
};

export default Renderer;
