import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
// import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
               <Skill iconId={"css"}
                      title={"HTML5"}
                      description={"fvfvveveeev"}/>
                <Skill iconId={"css"}
                      title={"HTML5"}
                      description={"fvfvveveeev"}/>
                <Skill iconId={"css"}
                      title={"HTML5"}
                      description={"fvfvveveeev"}/>
                <Skill iconId={"css"}
                      title={"HTML5"}
                      description={"fvfvveveeev"}/>
                <Skill iconId={"css"}
                      title={"HTML5"}
                      description={"fvfvveveeev"}/>
                <Skill iconId={"css"}
                      title={"HTML5"}
                      description={"fvfvveveeev"}/>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #27e811;
    min-height: 100vh;
`