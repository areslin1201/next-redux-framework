import React, { PureComponent } from 'react';
import {Helmet} from "react-helmet";

class SeoSchema extends PureComponent {
	render() {
		const { schemaAuthor, schemaHeadline } = this.props;

		const schemaArticle = `{
			"@context": "https://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://google.com/article"
      },
      "headline": "`+schemaHeadline+`",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
      ],
      "datePublished": "2015-02-05T08:00:00+08:00",
      "dateModified": "2015-02-05T09:20:00+08:00",
      "author": {
        "@type": "Person",
        "name": "`+schemaAuthor+`"
      }
		}`;

		return (
	    <Helmet>
        <title>seo-title</title>
	      <meta name="description" content="seo-description" />
	      <script type="application/ld+json">
	      	{schemaArticle}
	      </script>
	    </Helmet>
	  );
	}
}

export default SeoSchema;