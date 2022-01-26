import styled from "@emotion/styled";
import { isNull } from "lodash";
import { useState } from "react";
import { PostCodeDetail } from "./PostCodeDetail";
import { PostCodeSearch } from "./PostCodeSearch";
import { IApiAddress, IPostCode, IPostSearchData } from "./PostCode_types";

export function PostCode({ visible, onComplete }: IPostCode) {
  const [code, setCode] = useState<IPostSearchData | null>(null);
  const [detail, setDetail] = useState("");

  const setCodeFormat = (data: IApiAddress) => {
    const {
      bname,
      roadAddress,
      jibunAddress,
      buildingName,
      userSelectedType,
      zonecode,
    } = data;
    const extarAddr = `(${[bname, buildingName].filter(Boolean).join(", ")})`;
    const addressInfo =
      (userSelectedType === "J" ? jibunAddress : roadAddress) + " " + extarAddr;

    setCode({ ...data, localAddress: addressInfo });
  };

  const onChangeDetail = (val: string) => {
    setDetail(val);
  };

  const onCompleteHandler = () => {
    if (!isNull(code)) {
      onComplete({
        zonecode: code.zonecode,
        localAddress: code.localAddress,
        detailAddress: detail,
      });
    }
  };

  return (
    <PostCodeStyled>
      <PostCodeSearch onSearch={setCodeFormat} visible={isNull(code)} />
      <PostCodeDetail
        value={detail}
        codes={
          isNull(code)
            ? { zonecode: "", localAddress: "" }
            : { zonecode: code.zonecode, localAddress: code.localAddress }
        }
        visible={!isNull(code)}
        onChange={onChangeDetail}
      />
    </PostCodeStyled>
  );
}

const PostCodeStyled = styled.div`
  width: 500px;
  height: 500px;
`;
