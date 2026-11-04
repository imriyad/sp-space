import Image, { type ImageProps } from "next/image";

/** Local SVGs skip the optimizer so updates aren't stuck behind image cache. */
export function MediaImage({ src, unoptimized, ...props }: ImageProps) {
  const path = typeof src === "string" ? src : "";
  return (
    <Image
      src={src}
      unoptimized={unoptimized ?? path.includes(".svg")}
      {...props}
    />
  );
}
