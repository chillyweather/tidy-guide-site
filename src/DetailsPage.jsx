import { useParams } from "react-router-dom";
import ElementSection from "./docContent/ElementSection";
export const DetailsPage = ({ documentation, navigationLinks }) => {
  console.log("navigationLinks", navigationLinks);
  const { id } = useParams();
  const sectionData = documentation.find((e) => e._id === id).docs;
  return sectionData.map((element, index) => {
    return ElementSection({
      key: index,
      element,
      index,
      navigationLinks,
    });
  });
};
