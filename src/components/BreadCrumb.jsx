import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const AppBreadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    const title = snippet.charAt(0).toUpperCase() + snippet.slice(1);
    const isLast = index === pathSnippets.length - 1;

    return (
      <Breadcrumb.Item key={url}>
        {isLast ? title : <Link to={url}>{title}</Link>}
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>{breadcrumbItems}</Breadcrumb>
  );
};

export default AppBreadcrumb;
