import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";
import { FaClipboardList, FaUser, FaTag } from "react-icons/fa";
import { resolveProductionUrl } from "./resolveProductionUrl";

// Here we declare which view panes show up for which schema types
export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === `post`) {
    return S.document().views([
      S.view.form(),
      // Including the iframe pane, with a function to create the url
      S.view
        .component(Iframe)
        .options({ url: (doc) => resolveProductionUrl(doc) })
        .title("Preview"),
    ]);
  }

  return S.document();
};

// Then we export the default list of menu items
export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").title("Post").icon(FaClipboardList),
      S.documentTypeListItem("author").title("Author").icon(FaUser),
      S.documentTypeListItem("category").title("Category").icon(FaTag),
    ]);
