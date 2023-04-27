import React, { useRef, useEffect, useState } from "react";
import Input from "@tds/core-input";
import { styled } from "goober";
import Box from "@tds/core-box";
import Text from "@tds/core-text";
import A11yContent from "@tds/core-a11y-content";
import Spinner from "@tds/core-spinner";
import { colorGreyRaven, colorGreyShark, colorWhite } from "@tds/core-colours";
import { SEARCH_DEBOUNCE_TIMEOUT } from "../../store/api/index";
import useDebounce from "../../utils/Debounce";
import { NoResultsFound, ProfilePicWithFallback } from "../../utils";
import { useGetAutocompleteQuery } from "../../store/autocompleteSlice";


const AutoCompleteBox = styled(Box)((props) => ({
  position: "relative",
  flexGrow: props.fullWidth ? 1 : "unset",
}));
export const AutoCompleteList = styled(Box)((props) => ({
  position: "absolute",
  minHeight: "150px",
  maxHeight: "300px",
  marginBottom: "16px",
  left: props.translateToCenter ? "50%" : props.left ? props.left + "px" : 0,
  right: props.right ? props.right + "px" : 0,
  overflowY: "auto",
  zIndex: 1,
  borderRadius: "4px",
  background: colorWhite,
  textAlign: "left",
  border: `solid 1px ${colorGreyShark}`,
  filter: `drop-shadow(2px 4px 6px ${colorGreyRaven})`,
  width: props.sizeVal ? props.sizeVal + "px" : "auto",
  transform: props.translateToCenter ? "translateX(-50%)" : "none",
}));
export const AutoCompleteItem = styled(Box)({
  cursor: "pointer",
  alignItems: "center",
});
export const LoaderBox = styled(Box)({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const AutoComplete = ({
  label,
  name,
  errors,
  onSelect,
  onClear,
  onClick,
  hint,
  hintPosition,
  fullWidth,
  clearOnSelect,
  disabled,
  initialValue,
  defaultValue,
  clearValue,
  tooltip
}) => {
  // const { data: profileData } = useProfile();
  // const profileId = profileData?.employeeID;
  const [value, setValue] = useState(initialValue ?? "");
  const [selectedItem, setSelectedItem] = useState(initialValue ?? "");

  const debouncedValue = useDebounce(value, SEARCH_DEBOUNCE_TIMEOUT);
    const [loading, setLoading] = useState(false);
  const { data, isLoading, error } = useGetAutocompleteQuery(debouncedValue);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const listData = data?.entities?.undefined;
  if (name === "nominee") {
    listData = listData?.filter((list) => list.id !== profileId);
  }
  const handleChange = (e) => {
    setSelectedItem("");
    const newVal = e.target.value;
    setValue(newVal);
    setIsSearchOpen(true);
    onClear && onClear();
  };
  const selectItem = (newVal, autoCompletData) => {
    if (!clearOnSelect) {
      setSelectedItem(newVal);
      setValue(newVal);
    } else {
      setValue("");
      setSelectedItem("");
    }
    onSelect(autoCompletData);
  };

  const ref = useRef(null);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isSearchOpen && ref.current && !ref.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
    if (clearValue) setValue("");
  }, [defaultValue, clearValue]);
  return (
    <AutoCompleteBox fullWidth={fullWidth}>
      <Box ref={ref}>
        <Input
          value={value}
          name={name}
          onChange={handleChange}
          type="text"
          feedback={errors ? "error" : undefined}
          label={label}
          error={errors}
          hint={hint}
          hintPosition={hintPosition}
          disabled={disabled}
          tooltip={tooltip}
          onClick={() => setIsSearchOpen((oldState) => !oldState)}
        />
        {isSearchOpen && value && value.length > 2 && !selectedItem && (
          <AutoCompleteList inset={3} between={2}>
            {isLoading && (
              <LoaderBox between={1}>
                <Spinner
                  spinning
                  label={
                    <>
                      Loading{" "}
                      <A11yContent>the nominee list. Please wait.</A11yContent>
                    </>
                  }
                />
              </LoaderBox>
            )}
            {error && <NoResultsFound text="Failed to fetch data" />}
            {listData && listData.length === 0 && <NoResultsFound />}
            {listData &&
              listData.map((item, index) => (
                <AutoCompleteItem
                  between={3}
                  inline
                  onClick={() => {
                    selectItem(item.full_name, item);
                  }}
                  key={`autocompleteList-${item.network_login}-${index}`}
                >
                  <ProfilePicWithFallback
                    height={50}
                    width={50}
                    name={item.full_name}
                    profilePic={item.profilePic}
                  />
                  <Text size="large">
                    {item.full_name}({item.id})
                  </Text>
                </AutoCompleteItem>
              ))}
          </AutoCompleteList>
        )}
      </Box>
    </AutoCompleteBox>
  );
};
export default AutoComplete;
