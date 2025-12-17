export default function PersonSchema() {
  const githubUrl = "https://github.com/askavasarams";
  const linkedinUrl = "https://www.linkedin.com/in/ask-avasarams-0700b239a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const devToUrl = process.env.NEXT_PUBLIC_SOCIAL_DEVTO;

  const sameAs: string[] = [];
  if (githubUrl) sameAs.push(githubUrl);
  if (linkedinUrl) sameAs.push(linkedinUrl);
  if (devToUrl) sameAs.push(devToUrl);

  const schema: {
    "@context": string;
    "@type": string;
    name: string;
    jobTitle: string;
    url: string;
    sameAs?: string[];
  } = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fabrizio La Rosa",
    jobTitle: "Software Developer",
    url: "https://stackbyte.dev",
  };

  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
