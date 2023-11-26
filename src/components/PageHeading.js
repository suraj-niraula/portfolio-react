const PageHeading = ({ title, description }) => (
  <>
    {/* Page description */}
    <p className="page-description">{description}</p>
    {/* Page title */}
    <h3 className="page-title">{title}</h3>
  </>
);

export default PageHeading;
