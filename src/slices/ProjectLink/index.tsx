import { Content } from "@prismicio/client";
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
      Placeholder component for project_link (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectLink;
