import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";;
import socialImg from "../../../assets/images/Rectangle 14.png"
import timerlImg from "../../../assets/images/Rectangle 16.png"


const worksItems = ["ALL", "LADING PAGE", "REACT", "PYTHON", "KOTLIN"]

export const Works = () => {
    return (
        <StyledWorks>
           <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems} />
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Work title={"fgyyft"} text={"lbsfdbgbgssfgnsn"} src={socialImg}/>
                <Work title={"ddd"} text={"gfndhnhdn"} src={timerlImg}/>

            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #2c7ec1;
`