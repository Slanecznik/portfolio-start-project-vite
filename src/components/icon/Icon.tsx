import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
};

export const Icon = ({
                         iconId,
                         width = "50",
                         height = "50",
                         viewBox = "0 0 24 24",
                     }: IconPropsType) => {
    return (
        <svg width={width} height={height} viewBox={viewBox}>
            <use href={`${iconsSprite}#${iconId}`} />
        </svg>
    );
};