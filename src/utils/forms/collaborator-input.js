import { Close, Add } from "@tds/core-interactive-icon";
import Box from "@tds/core-box";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { IconButtonWrapper, ProfilePicWithFallback } from "..";
import Text from "@tds/core-text";
import AutoComplete from "../autocomplete/Autocomplete";
import toaster from "../toaster/index";
import { useGetUserQuery } from "../../store/profileSlice";

const CollaboratorBox = styled(Box)`
  align-items: flex-end;
`;
const CollaboratorListBox = styled(Box)`
  align-items: center;
`;

const CollaboratorListContainer = styled(Box)`
  flex-wrap: wrap;
  width: 100%;
  row-gap: 1rem;  
  display: "grid";
  @media (max-width: 1024px) {
    width:100%;
  }
  }),
`;
const CollaboratorInput = ({
  label,
  value,
  name,
  subtitle,
  setFieldValue,
  nominees,
  isTeam,
  setFieldError,
  ...rest
}) => {
  const [collaborators, setCollaborators] = useState([]);
  const [error, setError] = useState("");
  const { data: profileData } = useGetUserQuery();
  const handleAddCollaborator = async (newValue) => {
    console.log(collaborators, "valuevaluevalue");
    const idExist = value?.find((item) => item.empID === newValue?.id);
    let idExistData;
    if (!isTeam && nominees && newValue.id === nominees?.toString()) {
      toaster({
        title: "Nominee can not be a collaborator.",
        variant: "error",
        duration: 3000,
      });
      return;
    }
    if (collaborators.length == 10) {
      setFieldError(name, "You can add upto 10 collaborator's only ");
      return;
    }
    if (isTeam && nominees?.length) {
      idExistData = nominees.filter(({ empID: id }) => id == newValue.id);
      if (idExistData.length > 0) {
        toaster({
          title: "Nominee can not be a collaborator.",
          variant: "error",
          duration: 3000,
        });
        return;
      }
    }
    if (idExist) {
      setError("Collaborator already added");
      return;
    }
    if (newValue.id === profileData?.employeeID) {
      toaster({
        title: "You can not nominate yourself",
        variant: "error",
        duration: 3000,
      });
      return;
    }
    if (name == "nominee") {
      setFieldValue("collaborators", []);
      //setCollaborators([]);
    }
    setCollaborators([...collaborators, newValue]);
    setFieldValue(name, [...value, { empID: newValue?.id }]);
    // onValidateField();
  };
  const handleRemoveCollaborator = (index) => {
    setCollaborators(collaborators.filter((_item, i) => i !== index));
    setFieldValue(name, [...value.slice(0, index), ...value.slice(index + 1)]);
  };
  useEffect(() => {
    if (value.length === 0) {
      setCollaborators([]);
    }
  }, [value]);

  return (
    <Box between={3}>
      <CollaboratorBox inline>
        <AutoComplete
          clearOnSelect
          onClear={() => {
            setError("");
          }}
          onSelect={handleAddCollaborator}
          label={label}
          errors={error}
          name={name}
          hint={subtitle}
          hintPosition="below"
          {...rest}
        />
      </CollaboratorBox>
      {collaborators.length > 0 && (
        <CollaboratorListContainer inline between={3}>
          {collaborators.map((item, index) => {
            return (
              <CollaboratorListBox
                inline
                between={2}
                key={`CollaboratorList-${name}-${index}`}
              >
                <ProfilePicWithFallback
                  name={item?.full_name ?? ""}
                  fontSize="2em"
                  height={70}
                  width={70}
                  profilePic={item?.profilePic}
                />
                <Text bold>{item?.full_name}</Text>
                <IconButtonWrapper
                  additionalProps={{
                    cursor: "pointer",
                    marginTop: 8,
                  }}
                >
                  <Close
                    color="telusPurple"
                    onClick={() => handleRemoveCollaborator(index)}
                  />
                </IconButtonWrapper>
              </CollaboratorListBox>
            );
          })}
        </CollaboratorListContainer>
      )}
    </Box>
  );
};
export default CollaboratorInput;
