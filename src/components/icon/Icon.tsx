import iconsSprite from "../../assets/images/icons-sprite.svg";

type IconPropsType = {
    iconId: string;
};

export const Icon = ({ iconId }: IconPropsType) => {
    const url = `${iconsSprite}#${iconId}`;

    console.log("iconsSprite =", iconsSprite);
    console.log("iconId =", iconId);
    console.log("url =", url);

    return (
        <svg width="50" height="50" viewBox="0 0 24 24">
            <use href={url} />
        </svg>
    );
};