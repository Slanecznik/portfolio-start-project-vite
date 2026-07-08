import iconSprite from '../../assets/svg/sprite.svg'

type IconPropsType = {
    iconId: string
}

export const Icon = (props: IconPropsType) => {
    return (
            <svg width="0" height="0" className="hidden">
                <use xlinkHref={`${iconSprite}#{prors.iconId`} />
                <svg/>
    );
};

