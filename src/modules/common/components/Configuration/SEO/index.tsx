import { SEOProps } from '@modules/common/types/interfaces'

export default function SEO(props: SEOProps) {
  const { title, description, image, shouldIndexPage = true } = props

  return (
    <>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}

      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      {/* default metatags */}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href={process.env.FONT_GLOBAL} rel="stylesheet" />
      <link rel="icon" type="image/png" sizes="32x32" href={process.env.FAVICON32} />
      <link rel="icon" type="image/png" sizes="16x16" href={process.env.FAVICON16} />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={process.env.COMPANY_AT} />
      <meta name="twitter:creator" content={process.env.COMPANY_AT} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:src" content={image} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </>
  )
}
