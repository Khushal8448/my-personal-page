import Button from "@/components/Button";
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
      <Button
        label="Project Live Link"
        linkField={slice.primary.project_link}
        showIcon
      />
    </section>
  );
};

export default ProjectLink;
