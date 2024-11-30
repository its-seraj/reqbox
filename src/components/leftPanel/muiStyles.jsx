import { Padding } from "@mui/icons-material";
import { backdropClasses, GlobalStyles as GB } from "@mui/material";

export const GlobalStyles = (
  <GB
    styles={{
      "& .MuiOutlinedInput-root": {
        borderRadius: "8px !important",
        backgroundColor: "transparent",
        // "&:hover, &:active, &:focus": {
        //   "& fieldset": {
        //     border: "0px solid var(--border) !important",
        //   },
        // },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "2px solid var(--border) !important",
        },
        "& .MuiInputAdornment-root": {
          height: "auto !important",
        },
        "& .MuiInputBase-input": {
          font: "revert",
          color: "#ccc",
        },
      },
      "& .MuiAccordion-root": {
        backgroundColor: "transparent !important",
        color: "#aaa !important",
        boxShadow: "none !important",
        "& .MuiAccordionSummary-root": {
          flexDirection: "row-reverse !important",
        },
        "& .MuiAccordionSummary-root.Mui-expanded": {
          minHeight: "auto !important",
          "& .Mui-expanded": {
            margin: "12px 0 !important",
          },
        },
        "& .MuiAccordionDetails-root": {
          paddingTop: "0 !important",
          paddingBottom: "0 !important",
        },
      },
      "& .MuiAccordion-root.Mui-expanded": {
        margin: "0 !important",
      },
      "& .MuiCollapse-root": {
        "& .MuiList-root": {
          paddingTop: "unset !important",
          paddingBottom: "unset !important",
          maxWidth: "none !important",
          backgroundColor: "transparent !important",
          "& .MuiListItemButton-root": {
            borderRadius: "8px",
          },
          "& .MuiListItemText-root": {
            "& .MuiTypography-root": {
              fontFamily: "revert !important",
            },
          },
        },
      },
      "& .MuiTableContainer-root": {
        backgroundColor: "transparent !important",
        color: "white !important",
        "& .MuiTable-root .MuiTableCell-root": {
          color: "white",
          fontFamily: "revert !important",
          borderColor: "var(--border)",
        },
      },
      "& .MuiInputBase-root, .MuiMenuItem-root": {
        fontFamily: "revert !important",
        "& svg": {
          fill: "#aaa",
        },
      },
      "& .MuiPopover-paper": {
        backgroundColor: "var(--background) !important",
        color: "#ddd !important",
      },
      "& .right-root-container": {
        "& #url-bar": {
          fontSize: "1.2em",
          padding: "14px !important",
          fontFamily: "inherit",
        },
      },
      "& .left-root-container": {
        "& .MuiInputBase-input": {
          fontSize: "0.9em",
          padding: "8px !important",
          fontFamily: "inherit",
          fontWeight: "600",
          letterSpacing: "1px",
        },
      },
    }}
  />
);
