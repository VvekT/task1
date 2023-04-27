import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Paragraph from "@tds/core-paragraph";
import Text from '@tds/core-text'
import "./icon.scss";

/**
 *
 * name could be any one of these (
 * Icon-Attachments, Icon-ApplicationDevelopment, Icon-BigData&Analytics, Icon-CatalogueHelp,
 * Icon-Close, Icon-CloudServices&Solutions, Icon-Collapse, Icon-DigitalCXM,
 * Icon-DigitalITServices, Icon-Download, Icon-Dropdown-Black, Icon-Dropdownwhite Icon-Expand,
 * Icon-FAQs, Icon-Help, Icon-Home, Icon-KnowledgeBase, Icon-MakeARequest, Icon-Mainframe,
 * Icon-ManageIncidents, Icon-ManagedHosting, Icon-ManagedHyperscaleService, Icon-Nounbot
 * Icon-Next, Icon-NoOpenRequests, Icon-Notification, Icon-OpenNewIncidents,
 * Icon-Options, Icon-PaginationNext, Icon-PaginationPrevious, Icon-Profile, Icon-Quicklinks
 * Icon-RecommendedForYou, Icon-ReportAnIssue, Icon-RPA, Icon-Search, Icon-ServiceCatalogue,
 * Icon-ServiceRequest, Icon-Submenuexpand, Icon-Support, Icon-TELUSServiceRequestCatalogue,
 * Icon-Upload. Icon-Union8
 * )
 */
const Icon = ({
  name,
  className,
  text,
  iconClass,
  iconSize,
  iconInvert,
  iconBold,
  subtText
}) => {
  const [iconData, setIconData] = useState(null);
  useEffect(() => {
    fetchIcon(name);
  }, [name]);

  const fetchIcon = async (iconName) => {
    await import(`../../../public/images/icon/${iconName}.svg`)
      .then((data) => {
        setIconData(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {iconData && (
        <span className="icon-container">
          <span className={iconClass}>
            <iconData.ReactComponent className={className} />
          </span>
          {text && (
            <Paragraph size={iconSize} invert={iconInvert} bold={iconBold}>
              {text} {subtText && <Text size="small">{subtText}</Text>}
            </Paragraph>
          )}
        </span>
      )}
    </Suspense>
  );
};
Icon.defaultProps = {
  className: "svg-black", //available class (svg-white, svg-inverted)
  iconSize: "small", //small, medium, lage
  iconInvert: false, // false, true
  iconBold: false, // false, true
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
  iconClass: PropTypes.string,
  iconSize: PropTypes.string,
  iconInvert: PropTypes.bool,
  iconBold: PropTypes.bool,
};

export default Icon;
