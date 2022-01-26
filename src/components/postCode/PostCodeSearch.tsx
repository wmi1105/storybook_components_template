import { DaumPostcode, Address } from "react-daum-postcode";
import { IPostCodeSearch } from "./PostCode_types";

export function PostCodeSearch({ visible, onSearch }: IPostCodeSearch) {
  const handleComplete = (addr: Address) => {
    const data = {
      sido: addr.sido,
      sigungu: addr.sigungu,
      bname: addr.bname,
      buildingName: addr.buildingName,
      jibunAddress: addr.jibunAddress,
      roadAddress: addr.roadAddress,
      userSelectedType: addr.userSelectedType,
      zonecode: addr.zonecode,
    };

    onSearch(data);
  };

  if (!visible) return null;

  return (
    <DaumPostcode
      style={postCodeStyle}
      onComplete={handleComplete}
      autoClose={false}
    />
  );
}

const postCodeStyle: { [key: string]: string } = {
  display: "block",
  position: "relative",
  width: "100%",
  height: "100%",
  padding: "0",
};
