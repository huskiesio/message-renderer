# Turns Markdown-like strings into beautiful JSX

Turns

```
https://s3.amazonaws.com/keybase_processed_uploads/d24c7479498157f2cb81e185977dfd05_360_360.jpeg
```

into

```html
<div>
  <div className="markdown">
    <p>
      <a href="https://s3.amazonaws.com/keybase_processed_uploads/d24c7479498157f2cb81e185977dfd05_360_360.jpeg">https://s3.amazonaws.com/keybase_processed_uploads/d24c7479498157f2cb81e185977dfd05_360_360.jpeg</a>
    </p>
  </div>
  <div class="previews">
    <img src="https://s3.amazonaws.com/keybase_processed_uploads/d24c7479498157f2cb81e185977dfd05_360_360.jpeg">
  </div>
</div>
```

## Usage

```javascript
import MessageRenderer from '@huskiesio/message-renderer';

const SampleMessage = <MessageRenderer text="**Bolded text**"/>;
```

You need to include a couple stylesheets as well:

- `https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css` for the KaTeX math renderer
- `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/default.min.css` for the code highlighting
