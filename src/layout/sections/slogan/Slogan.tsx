import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>Тут будет слишком умная фраза</SectionTitle>
            <Button>Нажми меня)))</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #d0d8f4;
    
`