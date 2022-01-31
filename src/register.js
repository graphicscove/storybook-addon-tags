import React from "react";
import { addons } from "@storybook/addons";
import { styled } from "@storybook/theming";
import { Icons } from "@storybook/components";

addons.setConfig({
  sidebar: {
    renderLabel: (item) => {
      if (!item.isLeaf) {
        return item.name;
      }

      if (item.parameters?.tag) {
        let backgroundColor = "";
        let textColor = "";
        switch (item.parameters.tag.background) {
          case "info":
            backgroundColor = "#3B82F6";
            break;
          case "success":
            backgroundColor = "#22C55E";
            break;
          case "error":
            backgroundColor = "#EF4444";
            break;
          case "warning":
            backgroundColor = "#EAB308";
            break;
          default:
            backgroundColor = item.parameters.tag.background;
            textColor = item.parameters.tag.color
              ? item.parameters.tag.color
              : "#ffffff";
        }

        const Tag = styled.span`
          align-self: center;
          display: inline-block;
          margin-left: 4px;
          font-size: 12px;
          border-radius: 10px;
          background: ${backgroundColor};
          padding: 0 8px 2px;
          color: ${textColor};
          font-weight: 500;
        `;

        return (
          <>
            {item.name}
            {item.parameters.tag && <Tag>{item.parameters.tag.title}</Tag>}
          </>
        );
      }

      return item.name;
    },
  },
});
