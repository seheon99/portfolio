import { DataInteractive } from "@headlessui/react";
import NextLink from "next/link";
import { forwardRef } from "react";

export const Link = forwardRef(function Link(
  props: Parameters<typeof NextLink>[0] & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <DataInteractive>
      <NextLink {...props} ref={ref} />
    </DataInteractive>
  );
});
