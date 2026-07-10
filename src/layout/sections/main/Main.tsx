import styled from "styled-components";
import photo from "./../../../assets/images/logo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
                <Hi>Hi </Hi>
                <Name>I am Uladzimir</Name>
                <MainTitle>A Web Developer</MainTitle>
            </div>
            <Photo src={photo} alt={"vf"}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #80d9ed;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1`

`
const Name = styled.h2`

`
const Hi = styled.span`

`