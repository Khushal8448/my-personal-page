import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectLink`.
 */
export type ProjectLinkProps = SliceComponentProps<Content.ProjectLinkSlice>;

/**
 * Component for "ProjectLink" Slices.
 */
const ProjectLink = ({ slice }: ProjectLinkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.project_link}>
        Project Live Link
      </PrismicNextLink>
    </section>
  );
};

export default ProjectLink;

// update
