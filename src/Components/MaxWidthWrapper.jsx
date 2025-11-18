const MaxWidthWrapper = ({ children, className = "" }) => {
    return (
        <div className={`w-full max-w-[1728px] mx-auto px-5 md:px-10 lg:px-20 xl:px-24 ${className}`}>
            {children}
        </div>
    );
};

export default MaxWidthWrapper;