import { Head } from "@inertiajs/react";

export default function ({ ...props }) {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />

        {props.keywords && <meta name="keywords" content={props.keywords} />}
      </Head>

      {props.title && (
        <Head>
          <meta property="title" content={props.title} />
          <meta property="og:title" content={props.title} />
          <meta property="twitter:title" content={props.title} />
        </Head>
      )}

      {props.description && (
        <Head>
          <meta name="description" content={props.description} />
          <meta property="og:description" content={props.description} />
          <meta property="twitter:description" content={props.description} />
        </Head>
      )}

      {props.url && (
        <Head>
          <meta property="url" content={props.url} />
          <meta property="og:url" content={props.url} />
          <meta property="twitter:url" content={props.url} />
        </Head>
      )}

      {props.featuredImage && (
        <Head>
          <meta property="image" content={props.featuredImage} />
          <meta property="og:image" content={props.featuredImage} />
          <meta property="twitter:image" content={props.featuredImage} />
        </Head>
      )}
    </>
  );
}
