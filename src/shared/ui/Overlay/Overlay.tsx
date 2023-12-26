interface OverlayProps {
    onClick?: () => void;
}

export const Overlay = (props: OverlayProps) => {
    const { onClick } = props;

    return (
        <div
            className="flex items-center justify-center fixed top-0 bottom-0 right-0 left-0 cursor-pointer z-10 bg-black opacity-10"
            onClick={onClick}
        />
    );
};
