import styled from "@emotion/styled";
import { Input, INPUT_LINE_THEME, INPUT_STYLE_THEME } from "../input";
import { IPostCodeDetail } from "./PostCode_types";

export function PostCodeDetail({
  visible,
  value,
  codes,
  onChange,
}: IPostCodeDetail) {
  if (!visible) return null;

  return (
    <PostCodeDetailWrapper>
      <BannerStyled>
        <p>우편번호 : {codes.zonecode}</p>
        <p>주소1 : {codes.localAddress}</p>
      </BannerStyled>
      <PostCodeDetailStyled>
        <Input
          label="상세주소"
          styleTheme={INPUT_STYLE_THEME.DEFAULT}
          lineTheme={INPUT_LINE_THEME.HORIZONTAL}
          value={value}
          onChange={onChange}
        />
      </PostCodeDetailStyled>
    </PostCodeDetailWrapper>
  );
}

const PostCodeDetailWrapper = styled.div``;
const BannerStyled = styled.div``;
const PostCodeDetailStyled = styled.div``;
